import express from 'express';
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
]

const puerto = 8080;

const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

// ENVIO DE UN HTML BASICO USANDO EXPRESS
app.get('/mihtml', (request, response) => {
  const myfilePath = path.resolve(__dirname, './views/index.html');
  response.sendFile(myfilePath);
});

// //RESPUESTA EN FORMATO JSON (API)
app.get('/', (request, response) => {
  console.log(request.query);
  response.json({
    msg: 'Hola Mundo desde el main hahahah',
  });
});

//RESPUESTA EN FORMATO JSON (API)
app.post('/api/holamundo', (request, response) => {
  response.json({
    msg: 'Hola Mundo desde /api/holamundo',
  });
});