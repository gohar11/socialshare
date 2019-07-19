const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3610;
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config');

// Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.send({ 'message': 'Welcome to the social share' })
})

//== include routes
require('./app/routes/global.routes')(app)
app.listen(port, () => {
    console.log("server is running at " + port)
})