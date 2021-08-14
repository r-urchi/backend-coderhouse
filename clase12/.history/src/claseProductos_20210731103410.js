export class Products {
    constructor(id, title, price, thumbnail) {
        id;
        title;
        price;
        thumbnail;
      }

    read() {
        fs.readFile(pathTxt)
        .then((dataFile) => {
          console.log(dataFile.toString());
          return dataFile;
        })
        .catch((error) => {
          console.log('No se puede leer el archivo.', products, error);
        });
    }

    async save(title, price, thumbnail) {
        try {
            const id = products.length +1;
            const newProduct = {id, title, price, thumbnail};
            products.push(newProduct);
            console.log(products);
            await fs.writeFile(pathTxt, JSON.stringify(products, null, 2));
        } catch (error) {
            console.log('El producto no se agrego.', error);
        }
    } 
    async delete() {
        try {
            await fs.unlink(pathTxt);
            console.log(`Archivo ${pathTxt} borrado.`);
        } catch (error) {
            console.log('No se pudo borrar el archivo', error);
        }
    }
}


// product.delete();