
//aQUI INCIALIZO EL SERVIDOR - EJECUTOR --Arranco mi APP

require("dotenv").config();
const server = require('./src/app.js'); //Aqui es donde estoy inciando el servidor
const { conn, Genres } = require('./src/db.js'); // estoy requiendo la base de datos, al requerirlo se ejecuta la DB
const fetch = require("node-fetch");
const {API_KEY} = process.env;

// //al ser server.liste un metodo asincrono voy a implementar Async Await
// // server.listen(3001, ()=> console.log('server on port 3001'));  // tambien se puede de este modo

// async function main() {
//   await server.listen (3001);
//   console.log('server on port 3001');
// }

// main();

// Syncing all the models at once. ----------> sincroniza todos los modelos 
conn.sync({ force: false }).then(() => { //Sincronizo para que me cree la tabla -->force: true --> elimina la tabla y la vuelve a crear
  console.log('conexion correcta con la base de datos');
  server.listen(3001, () => {//listen es un metodo asincrono
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then((r) => r.json())
    .then((genre) => {
    for (let i of genre.results) {
      //console.log(i.name)
      //console.log(i.id)
    Genres.findOrCreate({where: {name: i.name, id: i.id }});
    }
    });
  });
});
