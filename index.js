/**
 * This is the most basic possible express server just for testing purposes.
 */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

app.listen(port, () => {
    console.log('listening on port 3000');
})