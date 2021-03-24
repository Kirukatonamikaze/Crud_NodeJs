const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const rutas = require('./routes/routes');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//midllewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host:'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crudnode'

},'single'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', rutas);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log("Server starting on port 3000");
});