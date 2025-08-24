
const fs = require("fs")
const path = require("path")

const dataFolder = path.join(__dirname, "data")

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("data folder created")
}

const filePath = path.join(dataFolder, "example.txt")
// syncronous functions

fs.writeFileSync(filePath, "Hello from node js")

const readContentFromFile = fs.readFileSync(filePath, "utf-8")
console.log("File content", readContentFromFile)

fs.appendFileSync(filePath, "\nthis is a new line ")
console.log("new file content added")


// async functions
const asyncFilePath = path.join(dataFolder, "async-example.txt")
fs.writeFile(asyncFilePath, "Hello async node js", (err) =>{
    if(err) throw err;
    console.log("Async file is created successfully")

fs.readFile(asyncFilePath, 'utf-8', (err, data) =>{
    if(err) throw err;
    console.log("Async file content: ", data)

fs.appendFile(asyncFilePath, '\n new line added', (err, data) =>{
    if(err) throw err;
    console.log("New line added")
})    
})   

})

