const http = require('http')
const cookie = require('cookie')

class Server {

    constructor() {
        this.makeServer()
    }

    makeServer() {
        this.server = http.createServer((req, res) => {

            this.addCookiesProperty(req, res)
            this.addSetCookieMethod(req, res)
            this.addSendMethod(req, res)

            if (this.areMiddlewaresMatch(req, res)) {
                let obj = this.getObjectThatMatchesUrl(req, res)
                if (obj) obj.func(req, res)
            }
            else {
                res.send('404')
            }

        })
    }

    /* Object that has function related to special path */
    routes = []

    middlewares = []

    get(route, func) {
        this.routes.push({ route, func, method: 'GET' })
    }

    post(route, func) {
        this.routes.push({ route, func, method: 'POST' })
    }

    use(route, func) {
        this.middlewares.push({ route, func })
    }

    areMiddlewaresMatch(req, res) {
        for (let i = 0; i < this.middlewares.length; i++) {
            if (!req.url.includes(this.middlewares[i].route)) return false
            if (!this.middlewares[i].func(req, res)) return false
        }
        return true
    }

    getObjectThatMatchesUrl(req, res) {
        for (let i = 0; i < this.routes.length; i++) {
            if (this.routes[i].route == req.url && this.routes[i].method == req.method) {
                return this.routes[i]
            }
        }
    }

    addCookiesProperty(req, res) {
        req['cookies'] = cookie.parse(req.headers.cookie)
    }

    addSetCookieMethod(req, res) {
        res['setCookie'] = function (key, value, options) {
            res.writeHead(200, {
                'Set-Cookie': `${key}=${value}; Max-Age=${options.maxAge}; `
            })
        }
    }

    addSendMethod(req, res) {
        res['send'] = (data) => {
            switch (typeof (data)) {
                case 'object':
                    data = JSON.stringify(data);
                    break;
                default:
                    break;
            }
            res.write(data)
            res.end()
        }
    }

    listen(port) {
        this.server.listen(process.env.port || port)
    }

}

module.exports = new Server()