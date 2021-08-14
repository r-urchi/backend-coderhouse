
class Products{
    constructor(){
        this.products = []
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    addProduct()
}

const products = new Products();
products.getProducts()