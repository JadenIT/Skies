const Controller = require('./lib/Controller')

class LoginController extends Controller {

    constructor(route) {
        super(route)
    }

    get(req, res) {
        res.write('get')
        res.end()
    }

    post(req, res) {
        res.write('post')
        res.end()
    }

}

module.exports = LoginController