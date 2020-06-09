<h1 align="center">Welcome to skies 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/skies" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/skies.svg">
  </a>
  <a href="https://github.com/JadenIT/Skies#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JadenIT/Skies/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JadenIT/Skies/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/JadenIT/skies" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/JadenIT/Skies#readme)

## Install

```sh
npm install skies
```

## Development

### index.js
```javascript
const server = require('skies').server
const LoginController = require('./LoginController')
new LoginController('/login')

server.listen(3000)
```

### LoginController.js
'get' method will responsive for the GET request and the 'post' for the POST, related to the route, that you give as param in constructor, here it's '/login'
```javascript
const Controller = require('skies').Controller

class LoginController extends Controller {
    constructor(route) {
        super(route)
    }
    get(req, res) {
        res.send('This is get')
    }
    post(req, res) {
        res.send({ data: 'This is post, sent by json' })
    }
}

module.exports = LoginController
```

## Middlewares
server.use(Path, Function)
```javascript
const server = require('skies').server
const LoginController = require('./LoginController')
const cors = require('./cors')

server.use('/', cors);

new LoginController('/login')

server.listen(3000)
```

### cors.js
Here it's a bit differ from express, the next() is 'return true', so if you don't return true, or don't return anything, it means that here it will stop
```javascript
function cors(req, res) {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': '*'
    })
    return true
}

module.exports = cors  
```

## Documentation
```javascript
/* Returns all params */
req['POST'] 
req['GET'] 

/* Returns name param */
req['POST']['name'] 
req['GET']['name]' 

/* Sends response */
res.send('Hi there!')
res.send({hi: "there!})

/* Sends response */
res.send('Hi there!')
res.send({hi: "there!"})

/* Returns cookies */
req['cookies']

/* Creates cookies */
res.setCookie(key, value, options)
options = {
  maxAge: maxAge
}
```


## Author

👤 **Vladislav Kruglikov**

* Github: [@JadenIT](https://github.com/JadenIT)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JadenIT/Skies/issues). You can also take a look at the [contributing guide](https://github.com/JadenIT/Skies/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Vladislav Kruglikov](https://github.com/JadenIT).<br />
This project is [ISC](https://github.com/JadenIT/Skies/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_