'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FraseSchema = Schema({
		texto: String
});

module.exports = mongoose.model('Frase', FraseSchema);