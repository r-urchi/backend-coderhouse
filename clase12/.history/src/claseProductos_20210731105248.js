
const productList = [];
class Products{
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
            id: pro +1,
            name: name,
            price: price
        })
        console.log(this.products)
    }
}

const products = new Products();
// products.getProducts()
products.addProduct('pepe', 150)
products.addProduct('jordf', 650)