const Gastos = require('../models/gastos')
const jwt = require('jsonwebtoken')

const { getUserFromToken } = require("../auth/authService")

module.exports = {
    async index(request, response) {
        // const lancamentos = await Lancamentos.find();
        // return response.json(lancamentos);

        try {
            console.log("getUserFromToken", getUserFromToken(request))
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return response.status(401).end()
            }
            return response.status(400).end()
        }

        return response.json("olá mundo")
    },

    async store(request, response) {
        const { lancamento } = request.body;
        if (!lancamento) {
            return response.status(400).json("Lançamento inválido.")
        }

        return response.json(lancamento);
    },
}