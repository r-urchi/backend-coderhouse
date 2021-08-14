import express from 'express';
import { Products } from './claseProductos';
import { productList } from './claseProductos';

const port = 8080;

const app = express();

const server = app.listen(port, () => {
    console.log('server up en puerto', port)
})

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

const products = new Products()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));