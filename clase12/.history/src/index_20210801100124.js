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

app.delete('/api/productos/borrar/:id', (req, res) => {
  const findId = req.params.id;
  const response = products.deleteProduct(findId)
  if (!response) {
      return res.status(400).json({
          error: 'No se pudo borrar el id solicitado.'
      });
  };

  res.json(response);
});

app.put('/productos/:id', (req, res) => {
  console.log(req.params);
  const idBuscado = Number(req.params.id);
  const body = req.body;

  /**The indexOf() method returns the first index at which a given element can be found
   * in the array, or -1 if it is not present.
   * indexOf() compares searchElement to elements of the Array using strict equality
   * (the same method used by the === or triple-equals operator).
   * */

  const posicion = productos.map((aProduct) => aProduct.id).indexOf(idBuscado);
  console.log(posicion);
  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */
  if (posicion == -1) {
    return res.status(404).json({
      msg: 'Product not found',
    });
  }

  /** Valido que la info que me mandaron este OK, sino respondo con 400 */
  if (
    !body.nombre ||
    !body.precio ||
    typeof body.nombre != 'string' ||
    typeof body.precio != 'number'
  ) {
    return res.status(400).json({
      msg: 'Necesito en el body el nombre (string) y el precio (number)',
    });
  }

  productos[posicion].nombre = body.nombre;
  productos[posicion].precio = body.precio;

  /**Estado 201: Objeto creado correctamente */
  res.status(201).json({
    data: productos[posicion],
  });
});