    require('dotenv').config();
const express = require('express');
const receitaRoutes = require('./routes/receitas');
const app = express();

app.use(express.json()); // Para analisar JSON nas requisições
app.use('/api/receitas', receitaRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
