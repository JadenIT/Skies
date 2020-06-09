const Controller = require('../lib/Controller')

class SomeController extends Controller {

    constructor(route) {
        super(route)
    }

    get(req, res) {
        /* req['GET'] */
        res.send('get')
    }

    post(req, res) {
        /* req['POST'] */
        res.send('post')
    }

}

module.exports = SomeController