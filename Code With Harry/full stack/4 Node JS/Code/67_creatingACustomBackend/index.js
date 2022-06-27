const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'; // local host
const port = 3000; // random value

// different pages for navigating webpage
const home = fs.readFileSync("./home.html");
const about = fs.readFileSync("./about.html");
const contact = fs.readFileSync("./contact.html");
const services = fs.readFileSync("./services.html");

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    // it will print in console  anything we do on webpage

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end("Hello World");

    if (url == '/') { //notes:  this line and below line both will work
    // if (url == '/home.html') {
        res.end(home); // will serve home which has 
        // readFileSync of home.html
    }
    else if (url == '/about.html') {
        res.end(about);
    }
    else if (url == '/services.html') {
        res.end(services);
    }
    else if (url == '/contact.html') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
}); // it takes a callback function "(req, res)"

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});