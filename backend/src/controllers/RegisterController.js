const authService = require('../auth/authService');

module.exports = {
    async store(request, response) {
        return authService.signup(request, response);
    },
}