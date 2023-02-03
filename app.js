 import express from 'express'

 import fs from 'fs'


const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))


        const data = await fs.promises.readFile('./products.json','utf-8' )
        const dataJs = JSON.parse(data)
        app.get('/products/:id',async(req, res)=>{
            try{
            const {id} = req.params
            const dataFilter = dataJs.find(idProduct => idProduct.id === id)
            if(!dataFilter){
                return res.send(`No existe el producto con el ID ${id}`)
            }
            res.send(dataFilter)
        }catch(error){
            console.log(error)
        }
        })


       
       app.get('/products', async(req, res)=>{
        try{
        const data = await fs.promises.readFile('./products.json','utf-8' )
        const dataJs = JSON.parse(data)
        const {limit} = req.query
        const dataLimit = dataJs.slice(0, limit)
        res.send(dataLimit)
        }catch(error){
            console.log(error)
        }
    })



app.listen(PORT, err=>{
    if (err) console.log(err)
    console.log(`Escuchando en el puerto en el puerto ${PORT}`)
})