const express = require("express");

const server = express();

server.get("/", function (req, res) {
    res.send("<h1>Hola desde el home</h1>")
    res.end();
})

server.get("/jorge", function (req, res) {
    res.send("<h1>Hola desde /jorge</h1>")
    res.end();
})

server.listen(8000, function () {
    console.log("Server on port 8000");
});