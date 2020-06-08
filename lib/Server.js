const http = require('http')
const cookie = require('cookie')

class Server {

    routes = []

    get(route, func) {
        this.routes.push({ route, func, method: 'GET' })
    }

    post(route, func) {
        this.routes.push({ route, func, method: 'POST' })
    }

    run() {
        this.server = http.createServer((req, res) => {

            /* Adding Cookies to request object */
            req['cookies'] = cookie.parse(req.headers.cookie)

            /* Adding setCookie methdod to request object */
            res['setCookie'] = function setCookie(key, value, options) {
                res.writeHead(200, {
                    'Set-Cookie': `${key}=${value}; Max-Age=${options.maxAge}; `
                })
            }

            /* Adding send methdod to response object */
            res['send'] = function send(data) {
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
    }

}

module.exports = new Server()