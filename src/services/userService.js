const userRepository = require('../repositories/userRepository');

const userService = {
    async create (user) {
        const { nome, idade, email } = user;

    if (!nome || nome.trim() === '') {
        throw new Error('O nome é obrigatório.');
    }

    if (idade === undefined || idade <= 0){

        throw new Error('A idade deve ser um valor maior que zero.');
    }

    if (!email || email.trim() === '') {
        throw new Error('O email é obrigatório.');
    }

    return await userRepository.create({
        nome: nome.trim(),
        idade,
        email: email.trim()
        });
    },

    async findAll() { 
        return await userRepository.findAll();
    },


    async findById(id){
        const user = userRepository.findById(id);

        if(!user) {
            throw new Error('Usuário não encontrado.')
        }

        return user;
    },

    async update (id, user){
        await this.findById(id);

        const {nome, idade, email } = user;

        if(!nome || idade <= 0 || !email) {
            throw new Error('Dados inválidos para atualização.')
        }

        return await userRepository.update(id, { nome, idade, email });
    },

    async delete (id){
        await this.findById(id);

        return await userRepository.delete(id);
    }
};

module.exports = userService;
