const express = require('express');

const app = express();

const PORT = 8888;

app.listen(PORT, () => {
    console.log("osla-s is listenign on port" + PORT);
})