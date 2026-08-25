const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());

app.use(userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}!`);
});