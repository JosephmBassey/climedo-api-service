//Require all that's needed to power this App
//adding a few documentation
import express, { json, urlencoded } from 'express';
import expressValidator from 'express-validator';
import { join } from 'path';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';
import TabsRoutes from './routes/v1/TabsRoutes';
import './config/dbConnection';

const app = express();

// create a rotating write stream
const accessLogStream = createStream('access.log', {
    interval: '1d', // rotate daily
    path: join(__dirname, 'logs')
});

app.use(json());
app.use(
    urlencoded({
        extended: true,
    }),
);
app.use(morgan('combined', { stream: accessLogStream }));
// //allowing for serving static files

app.use(expressValidator());

// allow cors
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});


//version routes
app.use('/api/v1', TabsRoutes);

// API docs
app.use('/apidoc', express.static(__dirname + '/public/'));
app.use(express.static('public'));
//default landing:
app.all('*', (req, res) => {
    res.status(404).send({
        status: 'failed',
        status_code: 404,
        message: 'Resource not found'
    });
});


module.exports = app;


