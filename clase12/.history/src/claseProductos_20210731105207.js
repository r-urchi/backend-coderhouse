
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
        return this.products;
    }

    addProduct(name, price) {
        this.products.push({
            id: this.products.length +1,
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