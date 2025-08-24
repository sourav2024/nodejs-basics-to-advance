const express = require("express")

const app = express();

// middleware 
const myFirstMiddleware = (req, res, next) =>{
  console.log("My first middleware")

  next();
}

app.use(myFirstMiddleware)

app.get("/", (req, res) =>{
    res.send("HOme page")
})

app.get("/about", (req, res)=>{
    res.send("About Page")
})

const port = 3000;
app.listen(port,() =>{
    console.log(`server is running at port ${port}`)
})