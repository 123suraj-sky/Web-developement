//Notes:
/*
1) It is a web application framework of node js.
2) It will do url parsel for us and help us routing
3) It wil be scalebility
*/


const express = require("express");

const port = 80;
const app = express();
const path = require("path");

//* for serving static files
app.use('/static', express.static('static'));
// here 'static' inside express.static(*) is folder name
//notes: we can /static to access content of static folder

//* Set the template engine as pug
app.set('view engine', 'pug');
// we have to include above line in app.js to use pug

//* Set the views directory
app.set('views', path.join(__dirname, 'views'));
// here last views is the folder name

//* Out pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', {title: 'Hey Sky', message: 'This is the first pug file'});
    // here demo is file name
});


/* when user will send request to our server it will be 
handled by this function */
app.get("/", (req, res) => {
    res.send("This is homepage of my first express app");
});

app.get("/about", (req, res) => {
    // res.send("This is about page via get");

    // we can also send status code
    res.status(200).send("This is about page via get");
});

app.get("/this", (req, res) => {
    res.status(400).send("This page is not found");
});

app.post("/about", (req, res) => {
    res.send("This is about page via posts via posts");
});

/* we have to tell on which port we want to listen */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});