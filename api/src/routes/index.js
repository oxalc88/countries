const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countries.router')
const activitiesRouter = require('./activities.router')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter)
router.use('/activities', activitiesRouter)


module.exports = router;
