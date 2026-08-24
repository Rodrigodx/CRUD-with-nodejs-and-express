const pool = require('../config/database');

const userRepository = {

    async create(user) {
        const query = `
            INSERT INTO atividade_2.users (nome, idade, email)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const values = [user.nome, user.idade, user.email];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async findAll() {
        const query = 'SELECT * FROM atividade_2.users';
        const result = await pool.query(query);
        return result.rows;
    },

    async findById(id) {
        const query = 'SELECT * FROM atividade_2.users WHERE id = $1';
        const result = await pool.query(query, [id]); // Adicionado o [id] e corrigido $1
        return result.rows[0];
    },

    async update(id, user){
        const query = `
            UPDATE atividade_2.users
            SET nome = $1, idade = $2, email = $3
            WHERE id = $4
            RETURNING *
        `; // Corrigido 'quantidade' para 'email'

        const values = [user.nome, user.idade, user.email, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async delete(id) {
        const query = 'DELETE FROM atividade_2.users WHERE id = $1 RETURNING *'; // Removido o '*'
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
};

module.exports = userRepository; // Corrigida a digitação de userRepostory