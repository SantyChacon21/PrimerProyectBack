class ProductManager {
    constructor() {
        this.products = []
    }

    getproducts = () => this.products
    addProduct = (img ,title, descripcion, precio, capacidad) => {
        const product = {
            img,
            title,
            descripcion,
            precio,
            capacidad
        }

        if (this.products.length === 0) {
            product.id = 1
        } else {
            
            product.id = this.products[this.products.length - 1].id + 1
            
        }
        this.products.push(product) 
        console.log(this.products)
    } 
     
}

const productManager = new ProductManager()
productManager.addProduct('...', 'Azucar "Dulce"', 'Azucar dulce blanca','$350',200)

