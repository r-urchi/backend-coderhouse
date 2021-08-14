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


app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducts);