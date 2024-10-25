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


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});