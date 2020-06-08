const Controller = require('skies').Controller

class SomeController extends Controller {

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

module.exports = SomeController