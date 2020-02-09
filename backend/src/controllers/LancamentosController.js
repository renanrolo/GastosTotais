const Lancamentos = require('../models/lancamento')

module.exports = {
    async index(request, response) {
        const lancamentos = Lancamentos.find();
        return response.json(lancamentos);
    },

    async store(request, response) {
        const { lancamento } = request.body;
        if (!lancamento) {
            return response.status(400).json("Lançamento inválido.")
        }

        return response.json(lancamento);
    },
}