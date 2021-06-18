const { Router } = require('express');
const {getAllGenres} = require('../controllers/genreControl')


const  router= Router();


router.get('/',getAllGenres)


module.exports =router;