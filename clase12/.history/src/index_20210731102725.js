import express from 'express';
import fs from 'fs/promises';



let viewsLink1 = 0;
let viewsLink2 = 0;

const puerto = 8080;
const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

app.get('/items', (request, response) => {
  viewsLink1++;
  response.json({
    items: products, 
    quantity: products.length,
  });
});

app.get('/item-random', async (request, response) => {
  try {
    viewsLink2++;
    const readFile = await fs.readFile('./products.txt', 'utf-8');
		const jsonRead = JSON.parse(readFile);
    const productRandom = jsonRead[Math.floor(Math.random() * jsonRead.length)];
		response.json({
			item: productRandom,
		});
  } catch (error) {
    console.log('No se pudo leer el archivo', error)
  }
});

app.get('/views', (request, response) => {
  response.json({
    views: {
      link1: viewsLink1, 
      link2: viewsLink2,
    }
  });
});

