const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static('www'));
app.use(bodyParser.json());


app.listen(3000, function() {
    console.log('listening on port 3000');
});