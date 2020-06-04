const express = require('express');
// const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/public'));

// mongoose.connect('mongodb://127.0.0.1/thisDB');

// const db = mongoose.connection;

/*
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected, mongoose did it");
});
*/

app.get('/api/thisStuff', function(req, res) {

    thisStuff.find({}, (err, data) => {

        if (err) throw err;

        res.send(data);

    })

});


var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

app.listen(PORT, () => {
    console.log("osla-s is listening on port " + PORT + "\n" + timestamp);
})