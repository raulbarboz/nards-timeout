//server
const express = require('express');
const app = express();
const path = require('path')
const favicon = require('express-favicon');

//set the view engine to ejs
app.set('view engine', 'ejs');

//set the public folder
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, '0.0.0.0', () => {
    console.log(`App running on 0.0.0.0:8080`)
})