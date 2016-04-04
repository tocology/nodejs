'use strict'

const http  = require("http")
const url   = require("url") // parse url & get more information about user request
const qs    = require("querystring")

let routes = {
    'GET' : {
        '/' : (req, res) => {
            res.writeHead(200, {'content-type': 'text/html'})
            res.end('<h1>Hello Nodejs</h1>')
        },
        '/about' : (req, res) => {
            res.writeHead(200, {'content-type': 'text/html'})
            res.end('<h1>This is the about page</h1>')
        },
        '/api/getinfo' : (req, res) => {
            // fetch data from db and respond as JSON
            res.writeHead(200, {'content-type': 'application/json'})
            res.end(JSON.stringify(req.queryParams))
        }
    },
    'POST' : {
        '/api/logon' : (req, res) => {
            let body = ''
            req.on('data', data => {
                body += data
                if(body.length > 2097152) {
                    res.writeHead(413, {'Content-type': 'text/html'})
                    res.end('<h3>Error: The file being uploaded exceeds the 2MB limit</h3>')
                    req.connection.destroy() // Stop the progress
                }
            })
            req.on('end', () => {
                let params = qs.parse(body)
                console.log('Username: ', params['username'])
                console.log('Password: ', params['password'])
                // Query a db to see if the user exists
                // If so, send a JSON response to the SPA
                res.end()
            })
        }
    },
    'NA' : (req,res) => {
        res.writeHead(404)
        res.end('Content not found!')
    }
}

function router(req, res) {
    let baseURI = url.parse(req.url, true)
    let resolveRoute = routes[req.method][baseURI.pathname]
    if(resolveRoute != undefined){
        req.queryParams = baseURI.query
        resolveRoute()
    } else {
        routes['NA'](req, res)
    }
}

http.createServer(router).listen(3000, () => {
    console.log('Server is on port 3000')
})