//server
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const path = require('path')
const favicon = require('express-favicon');
const firebase = require('./firebase.js');
const moment = require('moment');

port = process.env.PORT || 8080;
ip = process.env.IP || '0.0.0.0';

//set the view engine to ejs
app.set('view engine', 'ejs');
//firebase.getForm();
//set the public folder
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    firebase.getForm().then((child) => {
         res.render('index', {table: child, days: moment().diff( '2019-06-02', 'days')})
    })
   
})

app.post('/send', (req, res) => {
    let reqBody = req.body;
    firebase.inputForm(reqBody).then(() => {
         res.redirect('/')
    })
  
})

app.listen(port, ip, () => {
    console.log(`App running on 0.0.0.0:8080`)
})