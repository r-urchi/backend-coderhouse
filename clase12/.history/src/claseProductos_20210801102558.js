export const productList = [];
export class Products{
    constructor(id, title, price, thumbnail){
        id,
        title,
        price,
        thumbnail
    }

    getProducts() {
        console.log(productList);
        return productList;
    }

    addProduct(title, price, thumbnail) {
        productList.push({
            id: productList.length +1,
            title,
            price,
            thumbnail
        });
    }

    getProductId(id) {
        const productId = productList.find(product => product.id == id);
        productId ? console.log(productId) : null;
        return productId;
    }

    deleteProduct(id) {
        const productId = productList.findIndex((index) => index.id == id);
        productId ? console.log(productId) : null;
        return productId
    }

    deleteProduct(id) {
        const productId = productList.findIndex((index) => index.id == id);
        productId ? console.log(productId) : null;
        return productId
    }
}

// const pruebaProducto = new Products();

// pruebaProducto.addProduct('cucu', 123, 'sdjkla')
// pruebaProducto.addProduct('cuquito', 553, 'sdjkla')
// pruebaProducto.addProduct('fooxxy', 553, 'sdjkla')
// pruebaProducto.addProduct('pancho', 553, 'sdjkla')
// pruebaProducto.addProduct('panda', 553, 'sdjkla')
// pruebaProducto.getProducts()
// pruebaProducto.deleteProduct(5)
// pruebaProducto.getProducts()