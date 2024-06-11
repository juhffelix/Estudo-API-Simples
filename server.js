const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors()); 

let listaDeCompras = [];

app.get('/compras', (req, res) => {
  res.json(listaDeCompras);
});

app.post('/compras', (req, res) => {
  const newItem = req.body.item;
  listaDeCompras.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
