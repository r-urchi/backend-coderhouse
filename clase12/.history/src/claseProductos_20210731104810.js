
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
            nombre: nombre,
            price: price
        })
    }
}

const products = new Products();
// products.getProducts()
products.addProduct('pepe', 150)