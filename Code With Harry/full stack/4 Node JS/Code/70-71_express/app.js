//Notes:
/*
1) It is a web application framework of node js.
2) It will do url parsel for us and help us routing
3) It wil be scalebility
*/


const express = require("express");

const port = 80;
const app = express();

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