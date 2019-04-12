require('./src/database/connection');
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 9000;

const server = http.createServer(app);

server.listen(port);

// 'use strict';

// const express = require('express');
// const http = require('http');
// const socketio = require('socket.io');
// const socketEvents = require('./socket/SocketEvents');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

// const reserveRouter = require('./api/routes/Reserve');
// const timeRouter = require('./api/routes/Time');


// class Server {
//     constructor() {
//         this.port = process.env.PORT || 9000;
//         this.host = process.env.HOST || `localhost`;

//         this.app = express();
//         this.http = http.createServer(this.app);
//         this.socket = socketio(this.http);
//     }

//     appRun() {

//         this.socketEvents = new socketEvents(this.socket);
//         this.socketEvents.socketConfig();
//         this.app.use(express.static(__dirname + '/uploads'));

//         this.app.use(morgan('dev'));
//         this.app.use(bodyParser.urlencoded({
//             extended: false
//         }));

//         this.app.use(bodyParser.urlencoded({
//             extended: false
//         }));

//         this.app.use(bodyParser({
//             limit: '50mb'
//         }));

//         this.app.use(bodyParser.json());

//         this.app.use((req, res, next) => {
//             res.header('Access-Control-Allow-Origin', '*');
//             res.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept,Authorization');
//             if (req.method === 'OPTIONS') {
//                 res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
//                 return res.status(200).json({});
//             }
//             next();
//         })

//         this.app.use((req, res, next) => {
//             res.io = this.socket;
//             res.socketEvents = this.socketEvents;
//             next();
//         });

//         this.app.use('/times',timeRouter);
//         this.app.use('/reserves',reserveRouter);


//         this.http.listen(this.port, () => {
//             console.log(`Listening on http://${this.host}:${this.port}`);
//         });
//     }
// }

// const app = new Server();
// app.appRun();



