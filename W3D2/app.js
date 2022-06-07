const express = require('express'); 
const app = express(); 
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded());
let data = {};
let userCounter = 0;

app.listen(3000, () => { 
    console.log('Your Server is running on 3000'); 
});

app.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname, '', 'form.html'));
});

app.post("/", function(req, res, next) {
    data = req.body;
    userCounter++;
    res.redirect("/view");
});

app.get("/view", function(req, res, next) {
    let html = "";
    html += createLabel("text-input", data["text-input"]);
    html += createLabel("text-area", data["text-area"]);
    html += createLabel("radio-group", data["radio-group"]);
    html += createLabel("select", data.select);
    html += createLabel("checkbox-group", data["checkbox-group"]);
    html += "<br><br><br><h3>User Count: " + userCounter +"</h3>";
    html += "<a href='/'> Go Back to Form</a>";
    res.send(html);
});


app.use(function(req, res, next){
    res.sendFile(path.join(__dirname, '', '404.html'));
});

function createLabel(key, value) {
    return "<label>" + key + ": " + value + "</label><br>"
}