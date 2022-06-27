const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('61_mathObjectInJs.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    // here 200 is response code
    res.end(fileContent);
});

server.listen(80, '127.0.0.1', () => {
    console.log("Listening of port 80");
    // Here '127.0.0.1' is local host
    /* and we use port 80 b/c if we use port 80 here, it 
    will not require to explicitly mention port on 
    webpage we simple write 127.0.0.1 and our server will 
    start */
})