const server = require('./lib/Server')
const LoginController = require('./controllers/LoginController')

server.listen(3000)

server.use('/login', function (req, res) {
    return true
})

new LoginController('/login')