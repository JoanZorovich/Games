const { DataTypes } = require('sequelize');

//Aqui defino las funciones que se van a crear cuando los usuarios visiten determinadas rutas
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo videogame


  sequelize.define('videogame', {//'videogame es el nombre de la entidad o del modelo que se quiere definir
    
    id: {
      type: DataTypes.STRING,
      primaryKey: true, // Seteo esto como ID --> para definir mi propia PK
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    platforms: {
      type: DataTypes.STRING, ///array de objetos
      allowNull: false,
    },
  }, { timestamps: false }); // esto es para que no tenga problemas con fechas o algo por el estilo
};
