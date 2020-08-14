var express = require("express");
//var path = require("path");

const indexRouter = require("./route/index.js");
var serveStatic = require("serve-static");

var app = express();
app.use(serveStatic(__dirname));

app.use("/", indexRouter);

var port = process.env.PORT || 5000;
app.listen(port);

console.log("server started " + port);
