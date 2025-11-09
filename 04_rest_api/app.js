const express = require("express")

const app = express();

// Middleware
app.use(express.json())

let books = [
    {
        id: 1,
        title: "book 1"
    },
     {
        id: 2,
        title: "book 2"
    },
     {
        id: 3,
        title: "book 3"
    },
];

// get all books
app.get("/", (req, res) =>{
    res.json({
        message: "Welcome to our bookStore api"
    });
});

// get all bools

app.get("/get", (req, res) =>{
    res.json(books)
})

app.get("/get/:id", (req, res) =>{
    const book = books.find(item => item.id === parseInt(req.params.id))
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(404).json({
            message: "book not found"
        })
    }
})

// add a new book
app.post("/add", (req, res) =>{
    const newBook ={
        id: books.length + 1,
        title: `Book ${books.length+1}`
    };

    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: "New book added"
    })
})

app.listen(3000, () =>{

})