const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/usuarios', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    res.status(500).json({ erro: 'Erro ao buscar dados dos usuários' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
