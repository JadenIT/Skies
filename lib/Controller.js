const Server = require('./Server')

class Controller {

    constructor(route) {
        Server.get(route, this.get)
        Server.post(route, this.post)
    }

    get(req, res) {

    }

    post(req, res) {

    }

}

module.exports = Controller