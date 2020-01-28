module.exports = {
    async index(request, response) {
        const helloWorld = {
            Message: "Hello World!"
        }
        return response.json(helloWorld);
    },
}