import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const products = [
  {
    "id": 1,
    "title": "TV",
    "price": 28000,
    "thumbnail": "https://th.bing.com/th/id/OIP.wc_AcGs1gJ9kcfOTetHjNgHaHa?pid=ImgDet&rs=1"
  },
  {
    "id": 2,
    "title": "Laptop",
    "price": 64500,
    "thumbnail": "https://th.bing.com/th/id/OIP.y0yjKeyE-qE0URV8t1qCZAHaEo?pid=ImgDet&rs=1"
  },
  {
    "id": 3,
    "title": "Smartphone",
    "price": 47300,
    "thumbnail": "https://th.bing.com/th/id/OIP.QGNUJBEED2Yq_vAkVrf88gHaFe?pid=ImgDet&rs=1"
  }
];

const puerto = 8080;

const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

// // ENVIO DE UN HTML BASICO USANDO EXPRESS
// app.get('/mihtml', (request, response) => {
//   const myfilePath = path.resolve(__dirname, './views/index.html');
//   response.sendFile(myfilePath);
// });


app.get('/items', (request, response) => {
  // response.json(products);
  response.json({items: products, quantity: products.length})
});

app.get('/item-random', async (request, response) => {

  try {
    const readFile = await fs.readFile('./clase7/products.txt', 'utf-8');
		const jsonRead = JSON.parse(readFile);
    const productRandom =
			jsonRead[Math.floor(Math.random() * jsonRead.length)];
		res.json({
			item: productRandom,
		});
  } catch (error) {
    console.log('No se pudo leer el archivo', error)
  }
});

//RESPUESTA EN FORMATO JSON (API)
app.post('/api/holamundo', (request, response) => {
  response.json({
    msg: 'Hola Mundo desde /api/holamundo',
  });
});