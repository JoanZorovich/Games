//CONTROLERS DEFINO LAS FUNCIONES QU SE VAN A EJECUTAR CUANDO  LOS USUARIOS VISITEN DETERMINADAS RUTAS
require('dotenv').config();
const {Genres}= require('../db');



async function getAllGenres(req,res) {

  try {
    const genres = await Genres.findAll();
    res.json(genres);
  } catch (error) {
    console.log('es genreControl.js');
    console.error("Error");
  }  
}


module.exports ={
    getAllGenres
}