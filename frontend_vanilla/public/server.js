"use strict";
exports.__esModule = true;
var express = require("express");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
// import fs from "fs";
// import path from "path";
var app = express();
var port = 3000;
app.use((0, express_1.json)());
app.use((0, body_parser_1.urlencoded)({
    extended: true
}));
app.get("/", function (req, res) {
    res.json({
        message: "Hello world"
    });
    //   res.render("./index.html", (err, content) => {
    //     if (err) throw res.send(err);
    //     return res.send(content);
    //   });
});
app.listen(port, function () {
    console.log("deu certo, http://localhost:" + port);
});