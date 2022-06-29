'use strict'

// const models = require('../models/models')
const express = require('express')

// const { response } = require('../app')
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const { listCountries } = require("../models/models")
router.get('/countries', listCountries);

module.exports = router;
