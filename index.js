const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Middleware para interpretar JSON no corpo das requisições (req.body)
app.use(express.json());

// Registra as rotas da aplicação
app.use(userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}!`);
});