const http = require('http');
const fs = require('fs');
const portNum = require('minimist')(process.argv.slice(2));

let homeContent;
let projectContent;
let registrationContent;
let registrationScript;

fs.readFile("home.html", (err, data) => {
    if (err) throw err;
    homeContent = data.toString();
})

fs.readFile("project.html", (err, data) => {
    if (err) throw err;
    projectContent = data.toString();
})

fs.readFile("registration.html", (err, data) => {
    if (err) throw err;
    registrationContent = data.toString();
})

fs.readFile("script.js", (err, data) => {
    if (err) throw err;
    registrationScript = data.toString();
})

http.createServer((req, res) => {
    let url = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    switch (url) {
        case "/project":
            res.write(projectPage);
            res.end();
            break;
        case "/registration":
            res.write(registrationPage);
            res.end();
            break;
        case "/script.js":
            res.write(registrationScript);
            res.end();
            break;
        default:
            res.write(homePage);
            res.end();
            break;
    }
}).listen(portNum.port);
