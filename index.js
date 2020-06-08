const server = require('./lib/Server')
const LoginController = require('./LoginController')

server.run()

new LoginController('/login')

server.listen(3000)