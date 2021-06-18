const {Videogame,Genres}= require('../db');
const {API_KEY} = process.env;
const fetch = require("node-fetch");





// async function getAllVideogames(req,res) {
// console.log('es en videogamesControl.js, getallVideogames');
// try {
//   const uno = await fetch(req.query.search
//     ?`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.search}`
//     :`https://api.rawg.io/api/games?key=${API_KEY}`
//     )
//   const pagUno = await uno.json()
//   const dos = await fetch(pagUno.next)
//   const pagDos = await dos.json()
//   const videogamesDB= await Videogame.findAll({include:[Genres]})
//   console.log(videogamesDB)
//   res.json([...pagUno.results, ...pagDos.results, ...videogamesDB]) 
//   console.log(games.length)
//   console.log(req.query.search)



// }catch (error) {
//   console.error("Error");
// }
// }



async function getAllVideogames(req,res) {
console.log('es en videogamesControl.js, getallVideogames');
try {
  const uno = await fetch(req.query.search
    ?`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.search}`
    :`https://api.rawg.io/api/games?key=${API_KEY}`
    )
  const pagUno = await uno.json()
  const dos = await fetch(pagUno.next)
  const pagDos = await dos.json()
  const tres = await fetch(pagDos.next)
  const pagTres = await tres.json()
  const cuatro = await fetch(pagTres.next)
  const pagCuatro = await cuatro.json()
  const cinco = await fetch(pagCuatro.next)
  const pagCinco = await cinco.json()
  const videogamesDB= await Videogame.findAll({include:[Genres]})
  
  res.json([...pagUno.results, ...pagDos.results, ...pagTres.results, ...pagCuatro.results, ...pagCinco.results, ...videogamesDB]) 
  console.log(games.length)
  console.log(req.query.search)



}catch (error) {
  console.error("Error de getAllVideogame");
}
}



async function getGenres(req,res, next) {
  console.log('buscando video Games de ese genero dB');
    try {
        const Juegos = await Videogame.findAll({
          include: [
            {
              model: Genres,
            },
          ],
        });
        res.json(Juegos);
      } catch (error) {
        console.error("Error");
      }
}

async function getPlatforms(req,res, next) {
    await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    .then((r) => r.json())//tengo que transformar la info en algo que se pueda "leer o trabajar", en este caso un json
    .then((data) => { //aqui ya esta listo el dato para manipularlo
      res.json(data);
    });
}



module.exports ={
    getAllVideogames,
    getGenres,
    getPlatforms
}