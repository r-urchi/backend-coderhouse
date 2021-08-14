
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
        productList.splice(id - 1, 1);
    }
}