'use strict'

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var app = require('mongoose-pagination');
var app = require('./app');
var port = 3800;

// Conexión Database
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://leandro-cluster0:Lkd36108227@cluster0.fpxng0x.mongodb.net/challenger?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser:true, useUnifiedTopology: true })
		.then(() => {
			console.log("La conexión a la base de datos challenger se ha realizado correctamente!!");
		
			// Crear servidor
			app.listen(port, () => {
				console.log('Servidor corriendo en http://localhost:3800');
			});
		})
		.catch(err => console.log(err));


		