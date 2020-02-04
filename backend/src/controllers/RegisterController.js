const authService = require('../auth/authService');

module.exports = {
    async store(request, response) {
        console.log("register.store", request.body)

        return authService.signup(request, response);
        let res = authService.signup(request, response);
        console.log("register.put", res)

        return response.json(res);
    },
}