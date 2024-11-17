const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes() {
        try {
            this.app.use('', require('../routes/usuario'));
            this.app.use('', require('../routes/transferencia'));
        } catch (error) {
            console.log(error.message);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}.`);
        });
    }
}

module.exports = Server;