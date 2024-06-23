// backend/controllers/roupaController.js

const Roupa = require('../models/Roupa');

// Função para buscar camisetas por tamanho
exports.getCamisetasByTamanho = async (req, res) => {
    const tamanho = req.params.tamanho;
  
    try {
      const camisetas = await Roupa.find({ tipo_de_roupa: 'Camiseta', tamanho: tamanho });
      res.json(camisetas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar camisetas por tamanho' });
    }
  };