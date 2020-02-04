const express = require('express')

const auth = require('./configs/auth');
const indexController = require('./controllers/IndexController');
const RegisterController = require('./controllers/RegisterController')
const LoginController = require('./controllers/LoginController')

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
    const AuthService = require('./auth/authService');

    // openApi.post('/login', AuthService.login)
    // openApi.post('/signup', AuthService.signup)
    // openApi.post('/validateToken', AuthService.validateToken)

    openApi.get('/index', indexController.index);

    openApi.put('/signup', RegisterController.store);
    openApi.post('/login', LoginController.index);

    openApi.post('/validateToken', authService.validateToken);
}