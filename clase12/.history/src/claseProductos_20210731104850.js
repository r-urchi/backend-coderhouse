
class Products{
    constructor(){
        this.products = []
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
        conso
    }
}

const products = new Products();
// products.getProducts()
products.addProduct('pepe', 150)