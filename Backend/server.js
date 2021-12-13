const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    app.use(express.static(path.join(__dirname,'../build')));
    app.use('/static',express.static(path.join(__dirname,'build//static')));
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    const myStringConnection = 'mongodb+srv://admin:Sevta203@cluster0.njzou.mongodb.net/books?retryWrites=true&w=majority';
    mongoose.connect(myStringConnection, {useNewUrlParser: true});

    const Schema = mongoose.Schema;
    var bookSchema = new Schema({
        title:String,
        year:Number,
        author:String,
        quote:String,
        cover:String

    });

    var BookModel = mongoose.model("book",bookSchema);
    

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/books', (req,res)=>{
    // const mybooks = [
    //     {
    //         "Title":"Harry Potter and the Philosopher's Stone",
    //         "Year":"1997",
    //         "Author":"J.K.Rowling",
    //         "Quote":"It does not do to dwell on dreams and forget to live.",
    //         "Cover":"https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"
    //     },
    //     {
    //         "Title":"Alice in Wonderland",
    //         "Year":"1865",
    //         "Author":"Lewis Carroll",
    //         "Quote":"It's no use going back to yesterday, because I was a different person then.",
    //         "Cover":"https://www.collegefashion.net/wp-content/uploads/2019/01/aliceinwonderlandcover.jpg"
    //     }
    // ];

    BookModel.find((err,data)=>{
        res.json(data)
    })


    // // res.status(200).json({books:mybooks});
})

app.get('/api/books/:id',(req,res)=>{
    console.log(req.params.id);

    BookModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })

})

app.put('/api/books/:id', (req, res)=>{
    console.log(req.params.id);
    console.log(req.body);

    BookModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
        
    
})

app.delete('/api/books/:id',(req,res)=>{
    console.log("Delete Book: "+req.params.id);

    BookModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})

app.post('/api/books', (req,res)=>{
console.log('Book Recieved!');
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.author);
console.log(req.body.cover);
console.log(req.body.quote);

BookModel.create({
    title:req.body.title,
    year:req.body.year,
    author:req.body.author,
    cover:req.body.cover,
    quote:req.body.quote
})
res.send('Book Added');
} )

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})