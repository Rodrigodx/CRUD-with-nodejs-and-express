const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Mapeia as variáveis individuais do seu .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.on('connect', () => {
  console.log('Base de dados conectada com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};