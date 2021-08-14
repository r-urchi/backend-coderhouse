
class Products{
    constructor(){
        this.products = []
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    addProduct() {
        this.products.push({
            id: this.products
        })
    }
}

const products = new Products();
products.getProducts()