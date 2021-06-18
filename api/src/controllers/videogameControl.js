
const {Videogame, Genres}= require('../db');
const {BASE_URL, GAMES_URL} = require('../../constants');//MIRAR POR QUE ESTO NO FUNCIONA
const { v4: uuidv4 } = require('uuid');
const fetch = require("node-fetch");
const {API_KEY} = process.env;



function getGameDetails(req, res, next) {
    fetch(
        `https://api.rawg.io/api/games/${req.params.idVideogame}?key=${API_KEY}`
      )
        .then((r) => r.json())
        .then((data) => {
          if (data.detail === "Not found.") {
            return res
              .status(404)
              .json({ Error: "No hay juego que coincida con ese id." });
          } else {
            const videogame = {
              image: data.background_image,
              name: data.name,
              genre: data.genres.map((g) => " - " + g.name),
              description: data.description,
              release: data.released,
              rating: data.rating,
              platforms: data.platforms.map((p) => " - " + p.platform.name),
            };
            res.json(videogame);
          }
        });
}

async function getDBGameDetails(req, res, next) {
    await Videogame.findOrCreate({
        where: {
          id: req.params.idVideogame,
        },
        include: [
          {
            model: Genres,
          },
        ],
      }).then((g) => {
        console.log(g);
        console.log("Me traje el game");
        if (g == null || g == undefined) {
          return res
            .status(404)
            .json({ Error: "No hay juego que coincida con ese id." });
        } else {
          const videogame = {
            image: "",
            name: g[0].dataValues.name,
            genre: g[0].dataValues.genres.map((g) => " - " + g.name),
            description: g[0].dataValues.description,
            release: g[0].dataValues.release,
            rating: g[0].dataValues.rating,
            platforms: g[0].dataValues.platform,
          };
          res.json(videogame);
        }
      });
}


async function addVideogame(req, res, next) {
  const {name,description,release,rating,platforms,genres} = req.body;
  console.log(req.body)
  try {
    const videogame= await Videogame.create({
      id: uuidv4(), 
      name,
      description,
      release,
      rating,
      platforms
  })


  genres.forEach(async (genre) => {
    let  gen= await Genres.findOne({
        where: { name: genre }
    })
    await videogame.addGenre(gen)
})

  res.send("Creado exitosamente");
  }catch{
    res.send("No se pudo crear el videogame")
  }
}



module.exports ={
    getGameDetails,
    getDBGameDetails,
    addVideogame
}