const express = require('express');
const app = express();
const port = 4000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

app.get('/hello/:name/:lname', (req, res)=>{
    res.send("Hello "+req.params.name+" "+req.params.lname);
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
    res.status(200).json({ myMovies:movies });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});