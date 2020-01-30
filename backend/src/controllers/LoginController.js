const authService = require('../auth/authService');

module.exports = {
    async index(request, response) {
        return authService.login(request, response);
    },
}