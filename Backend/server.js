const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//setup for joining path to our build.
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//Use of Bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Using mongoose to connect to our MongoDB database.
const myStringConnection = 'mongodb+srv://admin:Sevta203@cluster0.njzou.mongodb.net/books?retryWrites=true&w=majority';
mongoose.connect(myStringConnection, { useNewUrlParser: true });

//Schema for our books.
const Schema = mongoose.Schema;
var bookSchema = new Schema({
    title: String,
    year: Number,
    author: String,
    quote: String,
    cover: String

});

//Now when we want to connect to our DB, we can reference the BookModel Variable.
var BookModel = mongoose.model("book", bookSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Will retrieve our JSON data from DB.
app.get('/api/books', (req, res) => {

    BookModel.find((err, data) => {
        res.json(data)
    })

})

//Callback function for when ID is found.
app.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    BookModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })

})

//Updates Book with newly changed data.
app.put('/api/books/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })


})

//HTTP request with delete method,pulls id out of url and finds its match within the database,deletes that record.

app.delete('/api/books/:id', (req, res) => {
    console.log("Delete Book: " + req.params.id);

    BookModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

//Creates a new Book with data retrieved from our request on /api/books
app.post('/api/books', (req, res) => {
    console.log('Book Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.author);
    console.log(req.body.cover);
    console.log(req.body.quote);

    //Creates Document in MONGODB
    BookModel.create({
        title: req.body.title,
        year: req.body.year,
        author: req.body.author,
        cover: req.body.cover,
        quote: req.body.quote
    })
    //Response to Confirm
    res.send('Book Added');
})

//Allows us to view all our Project on localhost:4000 by joining files from our build.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})