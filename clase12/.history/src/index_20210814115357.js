import express from 'express';
import path from 'path';
import * as http from 'http';
import io from 'socket.io';
import routerProducts from './routes/routerProductos';

//EXPRESS
const app = express();
const port = 8080;

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//PUG
app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

// server.on('error', (err) => {
//     console.log('ERROR =>', err);
// });

const myServer = http.Server(app);

myServer.listen(port, () => console.log('Server UP en puerto', port));

const myWSServer = io(myServer);

const messages = [];

myWSServer.on('connection', socket => {

    console.log('Un cliente se ha conectado');

    socket.on('new-message', data => {

        const newMessage = {
            socketId: socket.client.id,
            message: data,
        };
        console.log(newMessage)
        messages.push(newMessage);
        myWSServer.emit('messages', messages)
    });

    socket.on('askData', data => {
        console.log('ME LLEGO DATA');
        socket.emit('messages', messages)
    })
}) 

//ROUTER
app.use('/api/productos', routerProducts);
