const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// rota base
app.get('/', (req, res) => {
  res.json({ message: 'API da Lista de Compras funcionando.' });
});

// rotas corretas
const shoppingRoutes = require('./routes/shoppingRoutes');
app.use('/api/items', shoppingRoutes);

// conexão com MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/shopping_list')
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
  });