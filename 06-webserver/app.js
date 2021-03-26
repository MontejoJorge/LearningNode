const express = require('express');
const app = express();
const hbs = require('hbs');
require("dotenv").config();

const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/templates', function (err) {});

//contenido estatico
app.use( express.static("public") );

app.get('/', (req, res) => {
    res.render("home", {
        titulo: "Home"
    });
});

app.get('/generic', (req, res) => {
    res.render("generic", {
        titulo: "generic"
    });
});

app.get('/elements', (req, res) => {
    res.render("elements", {
        titulo: "elements"
    });
});
 
app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
})

app.listen(port);