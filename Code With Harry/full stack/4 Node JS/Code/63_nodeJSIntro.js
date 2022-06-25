//! console.log("Hello World");

//* code from node js about section
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


//* We can also add our own HTML file inside res.end(``);.
// For that also change its previous line text from 
// "text/plain" to "text/HTML".
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // pasted file lecture 19 - see in CSS folder
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Borders And Background</title>
        <style>
            #firstPara {
                background-color: red;
                width: 455px;
                height: 100px;
                /*height and width of background color*/
    
                /* border-width: 4px;
                border-color: green;
                border-style: solid;
                
                To write all above 3 line in 1 type:
                border: width style color */
                border: 4px solid green;
    
    
                border-radius: 3px;
                /*
                border-radius used for making curved corners.
                */
            }
    
            #secondPara {
                background-color: rgb(59, 243, 59);
                height: 100px;
                width: 455px;
    
                /*we can manually give side of border*/
                border-top: 2px solid violet;
                border-bottom: 2px solid rgb(55, 168, 144);
                border-left: 2px solid rgb(248, 227, 33);
                border-right: 2px solid rgb(0, 88, 202);
    
                /*changing border-radius at only a specified end*/
                border-top-left-radius: 4px;
                border-bottom-left-radius: 14px;
                border-top-right-radius: 24px;
                border-bottom-right-radius: 34px;
            }
    
            #thirdPara {
                height: 2010px;
                width: 4555px;
    
                /*To put a background image*/
                /* background-image: url('/19_img.png'); */
                background-image: url('https://i.stack.imgur.com/vhoa0.jpg');
                border: 2px solid red;
    
                /*but we see the backgound image is kept repeating
                to stop that we could use: */
                /* background-repeat: repeat-x; */
                /*image repeat on x direction*/
                /* background-repeat: repeat-y; */
                /*image repeat on y direction*/
                background-repeat: no-repeat;
    
    
                /*we can also change background position*/
                /* background-position: center center; */
                /* background-position: center top; */
                /* background-position: center left; */
                /* background-position: 122px top; */
                background-position: 122px 450px;
                /* background-position: 122px -450px; */
                /*we can also give pixel in -ve
                so that it shifts in opposite direction
            
            for x we use 'center', 'top', 'bottom'
            for y we use 'center', 'left', 'right'
            */
    
    
            }
        </style>
    </head>
    
    <body>
        <h2>This is a heading</h2>
        <p id="firstPara">This is paragragh</p>
        <br>
        <h2>This is second heading</h2>
        <p id="secondPara">This is my second paragragh</p>
        <br>
        <h2>This is third heading</h2>
        <p id="thirdPara">This is my third paragragh</p>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});