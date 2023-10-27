const express = require('express')
const app = express()
const port = 4000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/name', (req, res)=>{
    res.send("Hello "+req.body.fname+" "+req.body.lname);
})

app.get('/name', (req, res)=>{
    res.send('Hello '+req.query.fname + " "+ req.query.lname);
})

app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/api/books', (req, res)=>{

    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },  
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];

    res.json({
        martin_books:data,
        "Message":"Hello from server.js!"
    })
})

app.get('/', (req, res) => {
  res.send('Hello World 1!');
})

app.get('/whatever', (req, res)=>{
    res.send('Good Bye!');
})

app.get('/datarep', (req, res)=>{
    res.send("Welcome to Data Representation & Querying");
})

app.get('/hello/:name', (req, res)=>{
    res.send('Hello '+req.params.name);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})