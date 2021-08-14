import express from 'express';
import path from 'path';
import routerProducts from './routes/routerProductos';
import handlebars from 'express-handlebars';

const port = 8080;
const app = express();
const server = app.listen(port, () => {
    console.log('Server UP en puerto', port);
})

// const publicPath = path.resolve(__dirname, '../public');
// app.use(express.static(publicPath));

const layoutFolderPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPath = path.resolve(__dirname, '../views/layouts/index.hbs')

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: layoutFolderPath,
    defaultLayout: defaultLayerPath,
    extname: 'hbs',
}));

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducts);