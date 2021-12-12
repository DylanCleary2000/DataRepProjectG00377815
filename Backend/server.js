const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/books', (req,res)=>{
    const mybooks = [
        {
            "Title":"Harry Potter and the Philosopher's Stone",
            "Year":"1997",
            "Author":"J.K.Rowling",
            "Quote":"It does not do to dwell on dreams and forget to live.",
            "Cover":"https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"
        },
        {
            "Title":"Alice in Wonderland",
            "Year":"1865",
            "Author":"Lewis Carroll",
            "Quote":"It's no use going back to yesterday, because I was a different person then.",
            "Cover":"https://www.collegefashion.net/wp-content/uploads/2019/01/aliceinwonderlandcover.jpg"
        }
    ];
    res.status(200).json({books:mybooks});
})

app.post('/api/books', (req,res)=>{
console.log('Book Recieved!');
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.author);
console.log(req.body.cover);
console.log(req.body.quote);
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})