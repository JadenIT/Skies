const server = require('./lib/Server')
const LoginController = require('./LoginController')

server.run().listen(3000)

new LoginController('/login')