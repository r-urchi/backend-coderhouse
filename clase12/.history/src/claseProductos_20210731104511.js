
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
            id: this.p
        })
    }
}

const products = new Products();
products.getProducts()