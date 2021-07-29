'use strict'
const express = require('express');
const resultado_usuarioController = require('../controller/resultado_usuario.controller');
const md_autenticacion = require('../middlewares/authenticated');

//Rutas
var api = express.Router();
api.get('/resultado_de_usuario', resultado_usuarioController.obtenerResultadosUsuario);
api.get('/resultado_de_usuario/:id', resultado_usuarioController.obtenerResultadoUsuarioPorId);
api.post('/agregardespues/:id', resultado_usuarioController.agregarResultadoAlFinalizarElJuego);
api.post('/resultado_de_usuario', resultado_usuarioController.crearResultadoUsuario);
api.put('/resultado_de_usuario/:id', resultado_usuarioController.editarResultadoUsuario);
api.delete('/resultado_de_usuario/:id', resultado_usuarioController.eliminarResultadoUsuario);

module.exports = api;