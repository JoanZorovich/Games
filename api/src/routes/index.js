const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const videogamesRouters= require('./videogamesRoutes');
const videogameRouters = require('./videogameRoutes');
const genreRouters = require('./genreRoutes');


const router = Router(); //ejecuto en enrutador, ejecuto la funcion que devuelve un objeto -> Exporto el objeto

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogamesRouters);
router.use("/videogame",videogameRouters);
router.use("/genres",genreRouters);

module.exports = router;