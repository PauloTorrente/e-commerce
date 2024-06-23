// backend/controllers/userController.js

const User = require('../models/User');

// Exemplo de função para obter todos os usuários
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  // Outras funções do controller aqui, conforme necessário
};
