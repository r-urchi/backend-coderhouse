const http = require('http') ;

const getData = () => {
  
  const random = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const randomFloat = (max, min) => {
    return (Math.fround(Math.random() * (max - min) + min)).toFixed(2);
  };
  
  const object = JSON.stringify([
    { id: random(1, 10) },
    { title: `Producto ${random(1, 10)}`},
    { price: `$ ${randomFloat(0.0, 9999.99)}`},
    { thumbnail: `Foto ${random(1, 10)}`},
  ]);

  return object
};

const server = http.createServer((request, response) => {
  const data = getData();
  response.end(data);
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});