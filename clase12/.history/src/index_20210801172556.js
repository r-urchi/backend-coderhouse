import express from 'express';
import path from 'path';
import routerProducts from './routes/routerProductos'

const port = 8080;
const app = express();
const server = app.listen(port, () => {
    console.log('Server UP en puerto', port);
})

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducts);

const titleFrom = document.querySelector('#name')
const priceForm = document.querySelector('#price')
const thumbnailForm = document.querySelector('#thumbnail')
const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', (e) => {
    e.preventDefault;
    const datos = {
        title: titleFrom.value,
        price: priceForm.value,
        thumbnail: thumbnailForm.value
    }
    // console.log(JSON.stringify(datos))
    return JSON.stringify(datos)
})