//Notes:
/*
1) It is a web application framework of node js.
2) It will do url parsel for us and help us routing
3) It wil be scalebility*/


const express = require("express");

const port = 80;
const app = express();

/* when user will send request to our server it will be 
handled by this function */
app.get("/", (req, res) => {
    res.send("Hello World");
});

/* we have to tell on which port we want to listen */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});