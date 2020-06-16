const express = require('express');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/public'));

var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

app.listen(PORT, () => {
    console.log("osla-s ushi is listening on port " + PORT + "\n" + timestamp);
})