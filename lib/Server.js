const http = require('http')
const cookie = require('cookie')

class Server {

    /* Routes */
    routes = []

    get(route, func) {
        this.routes.push({ route, func, method: 'GET' })
        return this
    }

    post(route, func) {
        this.routes.push({ route, func, method: 'POST' })
        return this
    }

    run() {
        this.server = http.createServer((req, res) => {

            req['cookies'] = cookie.parse(req.headers.cookie)
            /* Options.maxAge */
            res['setCookie'] = function setCookie(key, value, options) {
                res.writeHead(200, {
                    'Set-Cookie': `${key}=${value}; Max-Age=${options.maxAge}; `
                })
            }

            this.routes.map(route => {
                if (route.route == req.url && route.method == req.method) {
                    return route.func(req, res)
                }
            })
        })
        return this
    }

    listen(port) {
        this.server.listen(process.env.port || port)
        return this
    }

}

module.exports = new Server()