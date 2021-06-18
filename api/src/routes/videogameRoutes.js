const { Router } = require('express');
const {getGameDetails, getDBGameDetails,addVideogame}= require('../controllers/videogameControl')
const  router= Router();


router.get('/:idVideogame', getGameDetails);
router.get('/dbvideogames/:idVideogame', getDBGameDetails);
router.post('/', addVideogame);

module.exports =router;