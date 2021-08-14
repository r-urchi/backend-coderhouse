
const productList = [];
class Products{
    constructor(){
        id,
        name,
        t
    }

    getProducts() {
        console.log(this.products);
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