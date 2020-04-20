const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
server.listen(8000);
const mongoose = require("./server/config/mongoose.js");
const Socket = require("./server/config/socket.js");
const io = new Socket(server);

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public/dist/public"));
require("./server/config/routes.js")(app);


