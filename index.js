const server = require('./lib/Server')

const LoginController = require('./controllers/LoginController')

const cors = require('./middlewares/cors')

server.use('/', cors);

new LoginController('/login')

server.listen(3000)