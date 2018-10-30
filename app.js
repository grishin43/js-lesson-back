var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
const data = require("./public/content/politics");

app.listen(port, () => {
    console.log('Example app listening on port' + port);
});

app.get('/news', (req, res) => {
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.send(data.news);
});