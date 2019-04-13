const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');
const port = process.env.PORT || 9000;
const server = http.createServer(app);
const socketio = require('socket.io')(server);
const cookieParser = require('cookie-parser')

server.listen(port);

//Router

const authRouter = require('./api/routes/Auth');
const portRouter = require('./api/routes/Port');
const reserveRouter = require('./api/routes/Reserve');
const timeRouter = require('./api/routes/Time');
const timeDefault = require('./api/routes/TimeDefault');

socketio.on('connection', (socket) => {

    socket.on('disconnect', async () => {
       
    });
});

app.use(cookieParser())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.io = socketio;
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept,Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/auth',authRouter);
app.use('/ports',portRouter);
app.use('/times',timeRouter);
app.use('/timesDefault',timeDefault);
app.use('/reserves',reserveRouter);


//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;