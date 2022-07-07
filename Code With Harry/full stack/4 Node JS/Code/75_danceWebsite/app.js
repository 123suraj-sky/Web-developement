const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//* Express Specific Stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//* Pug Specific Stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//* Endpoints
app.get('/', (req, res) => {
    const params = {};
    // res.status(200).render('index.pug', params);
    // after we create home.pug using template we will serve that
    res.status(200).render('home.pug', params);
});

//* Start The Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});