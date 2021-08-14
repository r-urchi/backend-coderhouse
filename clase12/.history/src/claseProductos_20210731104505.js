
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
            id
        })
    }
}

const products = new Products();
products.getProducts()