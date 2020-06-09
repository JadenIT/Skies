const server = require('../lib/Server')
const SomeController = require('./SomeController')
const cors = require('./cors')

server.use('/', cors)

new SomeController('/api')

server.listen(3000)