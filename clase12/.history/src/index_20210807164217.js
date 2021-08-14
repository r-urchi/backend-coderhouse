import express from 'express';
import path from 'path';
import routerProducts from './routes/routerProductos';

const port = 8080;
const app = express();
const server = app.listen(port, () => {
    console.log('Server UP en puerto', port);
})

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'pug');
const viewsPath = path.resolve(__dirname, '')

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducts);