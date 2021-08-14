import express from 'express';
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

app.get('/api/productos/listar', (req, res) => {
  const response = products.getProducts(productList)
  if(!response.length > 0){
    return res.status(404).json({
      Error: "No hay productos en la lista",
    });
  }
  res.json(response);
});

app.post('/api/productos/guardar', (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const thumbnail = req.body.thumbnail;
  if (!title || !price || !thumbnail) {
      return res.status(400).json({
          error: 'Deben ingresar correctamente los datos.'
      })
  }
  products.addProduct(title, price, thumbnail)
  return res.json(
      productList
  );
});

app.get('/api/productos/listar/:id', (req, res) => {
  const findId = req.params.id;
  const response = products.getProductId(findId)
  if (!response) {
      return res.status(400).json({
          error: 'No existe el id solicitado.'
      });
  };
  res.json(response);
});

app.put('/api/productos/actualizar/:id', (req, res) => {
  const idUpdate = req.params.id;
  const body = req.body;
  const idProduct = productList.findIndex((index) => index.id == idUpdate);

  if (idProduct != -1) {
    productList.splice(idProduct, 1, body);
  } else {
    return res.status(400).json({
      error: 'El id no existe',
    });
  }
  res.json({
    productList
  });
});

app.delete('/api/productos/borrar/:id', (req, res) => {
  const idDelete = parseInt(req.params.id);
  const idProduct = productList.findIndex((index) => index.id == idDelete);
  // const idProduct = productList.findIndex((index) => index.id == idDelete);

  if (idProduct != -1) {
    productList.splice(idProduct, 1);
  } else {
    return res.status(400).json({
      error: 'El id no existe',
    });
  }
  res.json({
    productList,
  });
});
// app.delete('/api/productos/borrar/:id', (req, res) => {
//   const findId = req.params.id;
//   const response = products.deleteProduct(findId)
//   if (!response) {
//       return res.status(400).json({
//           error: 'No se pudo borrar el id solicitado.'
//       });
//   };

//   res.json(response);
// });