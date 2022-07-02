'use strict'

//const models = require('../models/models')
const express = require('express')

// const { response } = require('../app')
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// - GET /countries__:
//   - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
//   - Obtener un listado de los paises.
// - GET /countries/{idPais}__:
//   - Obtener el detalle de un país en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de país
//   - Incluir los datos de las actividades turísticas correspondientes
// - GET /countries?name="..."__:
//   - Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
//   - Si no existe ningún país mostrar un mensaje adecuado
// - POST /activity__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
//   - Crea una actividad turística en la base de datos
const { listCountries } = require("../controllers/listCountries");
router.get('/countries', listCountries);

const { countryDetail } = require("../controllers/countryDetail");
router.get('/countries/:idPais', countryDetail);

// const { nameContry } = require("../controllers/nameContry");
// router.get('/countries?name', listCountries);

// const { activity } = require("../controllers/activity");
// router.post('/activity', listCountries);

module.exports = router;
