const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo


  sequelize.define('genres', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    name: {
      type: DataTypes.STRING,
    },
  }, { timestamps: false });// esto es para que no tenga problemas con fechas o algo por el estilo
};
