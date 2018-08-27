const express = require('express');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log("osla-s is listening on port" + PORT);
})