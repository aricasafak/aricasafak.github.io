const express = require("express");
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.listen(80, () => {
    console.log('Server is running on 80')
});
let loggedIn = false;
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname,"view"));

app.use((req, res, next) => {
    loggedIn = req.cookies['isLoggedIn'];
    next();
});

app.get("/login", function(req, res, next) {
    if(loggedIn) {
        res.redirect('/form');
    }else {
        res.render("login");
    }
});

app.post("/login", function(req, res, next) {
    if(req.body.username == "admin" && req.body.password == "admin") {
        res.cookie("isLoggedIn", true);
        res.redirect("/form");
    } else {
        res.cookie("isLoggedIn", false);
        res.redirect("/login");
    }
});

app.get('/form', function(req, res, next) {
    if(loggedIn) {
        res.render('form');
    }else {
        res.redirect("/login")
    }
});

app.post("/form", function(req, res, next) {
    if(loggedIn) {
        res.cookie("resultCookie", req.body);
        res.redirect("/result");
    }else {
        res.redirect("/login")
    }
});

app.get("/result", function(req, res, next) {
    if(loggedIn) {
        res.render("result", {resultCookie: req.cookies.resultCookie});
    }else {
        res.redirect("/login")
    }
});


app.use(function(req, res, next){
    res.redirect("/login");
});