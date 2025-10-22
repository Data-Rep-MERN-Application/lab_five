const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

app.get('/index', (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get('/myname', (req, res)=>{
    res.send("Hello "+ req.query.firstname +" "+ req.query.lastname);
})

app.post('/myname',(req, res)=>{
    res.send("Hi "+req.body.firstname+" "+ req.body.lastname);
})

app.get('/whatever',(req, res)=>{
    res.send("Hello from whatever");
})

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ asdfsdf:movies });
});


app.get('/name/:myname/:mysname',(req, res)=>{
    const lname = req.params.myname;
    console.log(lname);
    res.send("Hello "+req.params.myname+ " "+req.params.mysname);
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});