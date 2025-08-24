const express = require("express")

const app = express();

// root route
app.get("/", (req, res) =>{
    res.send("Welcome to home page")
})

// get all proudcts
app.get("/products", (req, res) =>{
    const products = [
        {
            id: 1,
            key: "product 1"
        },
         {
            id: 2,
            key: "product 2"
        }
    ]

    res.json(products)
})

// get single product
app.get("/products/:id", (req, res) =>{

    const productId = parseInt(req.params.id)
    const products = [
        {
            id: 1,
            key: "product 1"
        },
         {
            id: 2,
            key: "product 2"
        }
    ]
   
    const getSingleProduct = products.find(product => product.id === productId)

    if(getSingleProduct){
        res.json(getSingleProduct)
    } else{
        res.status(500).send('product not found')
    }
 })

const port = 3000;
app.listen(port,() =>{
    console.log(`server is running at port ${port}`)
})