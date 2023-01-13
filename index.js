class ProductManager{
    constructor( ) {
        this.products = [ ]
    }
    getProducts = ( ) => this.products
    getProductById = ( id ) => { 
        const productDb = this.products.find (product =>product.id === id)
        if (!productDb) {
            return `Producto no Encontrado  con el id: ${id}` 
        }
    }
    addProduct =(newProduct) =>{
        const productDb = this.products.find (product =>product.code === newProduct.code)
        if (productDb){
        return  `Producto Encontrado` 
        }

        if (this.products.length === 0) {
            newProduct.id = 1
            this.products.push(newProduct)
        } else {
            this.products = [...this.products, {...newProduct, id: this.products[this.products.length-1].id+1 }]
        }
    }
}

const productos = new ProductManager( )
console.log(productos.addProduct({
    title: 'Azucar',
    description:'Azucar Blanca',
    price: 110,
    img: '...',
    code:1,
    stock:200
}))

console.log(productos.addProduct({
    title: 'Leche',
    description:'Leche blanca "La Serenisima"',
    price: 150,
    img: '...',
    code:2,
    stock:100
}))

console.log(productos.getProducts())
console.log(productos.getProductById(3))