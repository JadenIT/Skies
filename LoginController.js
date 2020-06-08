const Controller = require('./lib/Controller')

class LoginController extends Controller {

    constructor(route) {
        super(route)
    }

    get(req, res) {
        res.send({ car: 1 })
    }

    post(req, res) {
        res.send({ car: 1 })
    }

}

module.exports = LoginController