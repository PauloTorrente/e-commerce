// backend/models/Roupa.js

const mongoose = require('mongoose');

const roupaSchema = new mongoose.Schema({
  nome_da_roupa: { type: String, required: true },
  tipo_de_roupa: { type: String, required: true },
  tamanho: { type: String, required: true },
  preco: { type: Number, required: true },
  foto: { type: String, required: true }
});

const Roupa = mongoose.model('Roupa', roupaSchema);

module.exports = Roupa;
