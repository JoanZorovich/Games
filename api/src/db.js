//En este archivo voy a configurar la base de datos

require('dotenv').config(); //modulo para manejar las variables de entorno --> requiero el módulo y ejecuto em metodo config
//antes que se ejecute el código se van a importar todas las variables 
const { Sequelize } = require('sequelize'); // importamos sequelize
const fs = require('fs');
const path = require('path');


const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env; //procces (objeto de nuestro sistema operativo) en el objeto por el cual node tiene acceso a nuetro sistema operativo
//console.log(DB_USER, DB_PASSWORD, DB_HOST);


//const sequelize = new Sequelize(`postgres://postgres:12345@localhost:5432/videogames`, { //conectar la base de datos con el ORM(sequelize)
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {  
logging: false, // set to console.log to see the raw SQL queries --> solo me muestre los mensajes de morgan
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);



const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genres } = sequelize.models;

// Aca vendrian las relaciones

Videogame.belongsToMany(Genres, { through: 'VideogameGenre'});
Genres.belongsToMany(Videogame, { through: 'VideogameGenre'});




module.exports = {
  ...sequelize.models, //... poder hacer un destructuring directamente a db// para poder importar los modelos así: const { Product, User } = require('./db.js'); 
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
