const userService = require("../services/userService");

const userController = {
    async create(req, res) {
        try {
            const createdUser = await userService.create(req.body);
            return res.status(201).json(createdUser);
        } catch (error) {
            return res.status(400).json({ mensagem: error.message });
        }
    },

    async findAll(req, res) {
        try {
            const users = await userService.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ mensagem: "Erro interno ao buscar usuários." });
        }
    },

    async findById(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.findById(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ mensagem: error.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedUser = await userService.update(id, req.body);
            return res.status(200).json(updatedUser);
        } catch (error) {
            if (error.message === 'Usuário não encontrado.') {
                return res.status(404).json({ mensagem: error.message });    
            }
            return res.status(400).json({ mensagem: error.message });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;
            await userService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ mensagem: error.message });
        }
    }
};

module.exports = userController;