import express from 'express';
import routerProducts from './routes/routerProductos'
import { Products } from './claseProductos';
import { productList } from './claseProductos';

const port = 8080;
const app = express();
const server = app.listen(port, () => {
    console.log('Server UP en puerto', port);
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

const products = new Products();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducts);
