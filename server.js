const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});