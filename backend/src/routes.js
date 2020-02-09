const express = require('express')

const auth = require('./configs/auth');
const indexController = require('./controllers/IndexController');
const lancamentosController = require('./controllers/LancamentosController');

const authService = require('./auth/authService');


module.exports = function (server) {
    // index, show, store, update, destroy

    /* Rotas protegidas por Token JWT */
    const protectedApi = express.Router();
    server.use('/api', protectedApi);
    protectedApi.use(auth);


    /* Rotas abertas */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    // openApi.post('/login', AuthService.login)
    // openApi.post('/signup', AuthService.signup)
    // openApi.post('/validateToken', AuthService.validateToken)

    openApi.get('/index', indexController.index);

    openApi.post('/signup', authService.signup);
    openApi.post('/login', authService.login);
    openApi.post('/validateToken', authService.validateToken);


    /* Rotas Autenticadas */
    protectedApi.get('/lancamentos', lancamentosController.index)
    protectedApi.post('/lancamentos', lancamentosController.store)

}