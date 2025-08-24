const http = require("http")

const server = http.createServer((req, res) =>{
  
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Home Page")
    }
    else if (url === "/projects"){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("projects Page")
    }
    else {
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("This page is not found")
    }
})

const port = 3000;
server.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})