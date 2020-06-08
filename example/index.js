const server = require('skies').server
const SomeController = require('./SomeController')
const cors = require('./cors')

server.use('/', cors)

server.listen(3000)