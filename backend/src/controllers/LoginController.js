const authService = require('../auth/authService');

module.exports = {
    async index(request, response) {
        console.log("Login.index", request.body)
        return authService.login(request, response);
    },
}