

const {Router} = require('express')
const {getAllVideogames, getGenres, getPlatforms}= require('../controllers/videogamesControl')
const  router= Router();

router.get('/', getAllVideogames);
router.get('/games', getGenres);
router.get('/platforms', getPlatforms);


module.exports =router;