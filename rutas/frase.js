'use strict'

var express = require('express');
var FraseControlador = require('../controlador/frase');
var api = express.Router();

api.post('/agregarfrase',  FraseControlador.agregarFrase);
api.get('/listarfrasesTodas',  FraseControlador.listarFrases);
api.get('/frases',  FraseControlador.buscarFrasesPorPalabraClave);
api.delete('/eliminarfrase/:id', FraseControlador.eliminarFrase);


module.exports = api; 