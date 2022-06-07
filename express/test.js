const express = require('express'); 
const app = express(); 

app.listen(3000, () => { 
    console.log('Your Server is running on 3000'); 
});

app.get("/", function(req, res, next) {
    res.send("<h1>Welcome</h1>");
})

app.get("/add", function(req, res, next) {
    res.send("<h1>Add Page</h1>");
})

let countClient = 0;
app.get("/edit", function(req, res, next) {
    countClient++;
    res.send("<h1>Edit Page</h1>" +
    "<h2>Safak</h2>"+
    "<input type='checkbox' /> Check<br><br>"+
    "Client Count : " + countClient
    );
})

app.use(function(req, res, next){
    res.send("404 page");
});