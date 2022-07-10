const express = require("express");
const { application } = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs"); // for writing file

//* EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded()); // Used to get data entered in from

//* PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

//* ENDPOINTS
app.get("/", (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': "SF4 is the best game", "content": con};
    res.status(200).render('index.pug', params);

    // res.status(200).render('index.pug');
    // here status 200 means the program is running successfully
    // here params is not used so no use of "con" and "params"
});

app.post('/', (req, res) =>{
    // console.log(req.body);
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;

    //& prints user data in file
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);

    const params = {'message': "Your form is submitted successfully"};
    res.status(200).render('index.pug', params);
});

//* START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});