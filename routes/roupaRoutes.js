// backend/routes/roupaRoutes.js

const express = require('express');
const router = express.Router();
const roupaController = require('../controllers/roupaController');



// Rota para obter todas as camisetas
router.get('/camisetas/:tamanho', roupaController.getCamisetasByTamanho);

// Outras rotas para diferentes tipos e tamanhos de roupas podem ser adicionadas aqui

module.exports = router;
