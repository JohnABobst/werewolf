const models = require("mongoose");

class Socket {
    constructor(server) {
        this.io = require("socket.io")(server);
    }
}

module.exports = Socket;
