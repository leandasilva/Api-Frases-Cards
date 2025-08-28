'use strict'

var Frase = require('../modelo/frase');

function probando(req, res){
	res.status(200).send({
		message: "Hola desde el CONTROLADOR DE Frases"
	});
}

function agregarFrase(req, res){
	var params = req.body;

	if(!params.texto) return res.status(200).send({message: 'Debes enviar un texto!!'});

	var frase = new Frase();
	frase.texto = params.texto;

	frase.save((err, fraseStored) => {
		if(err) return res.status(500).send({message: 'Error al guardar la frase'});

		if(!fraseStored) return res.status(404).send({message: 'La frase NO ha sido guardada'});

		return res.status(200).send({frase: fraseStored});
	});

}

function listarFrases(req, res) {
  Frase.find({}, 'texto', (err, frases) => {
    if (err) return res.status(500).send({ message: 'Error en la petición' });

    if (!frases || frases.length === 0) {
      return res.status(404).send({ message: 'No hay frases registradas' });
    }

    return res.status(200).send(frases); // 🔥 devuelve directamente el array
  });
}

function buscarFrasesPorPalabraClave(req, res) {
  const palabraClave = req.query.q;

  if (!palabraClave) {
    return res.status(400).send({ message: 'Debe enviar una palabra clave para buscar' });
  }

  Frase.find({ texto: { $regex: palabraClave, $options: 'i' } }, 'texto', (err, frases) => {
    if (err) return res.status(500).send({ message: 'Error en la búsqueda' });

    if (!frases || frases.length === 0) {
      return res.status(404).send({ message: 'No se encontraron frases' });
    }

    return res.status(200).send({ frases });
  });
}

function eliminarFrase(req, res) {
  const fraseId = req.params.id;

  Frase.findByIdAndDelete(fraseId, (err, fraseEliminada) => {
    if (err) return res.status(500).send({ message: 'Error al eliminar la frase' });

    if (!fraseEliminada) {
      return res.status(404).send({ message: 'No se encontró la frase' });
    }

    return res.status(200).send({ message: 'Frase eliminada correctamente' });
  });
}


module.exports = {
	probando,
	agregarFrase,
	listarFrases,
	buscarFrasesPorPalabraClave,
	eliminarFrase
}