
const fs = require("fs")
function person(name, callbackFn) {
 
    console.log(`Hello ${name}`)
    callbackFn();
}

function address () {
    console.log("India")
}

person("Sourav Kashyap", address)

fs.readFile("input.txt", "utf-8", (err, data) =>{
    if(err){
        console.error("error reading file", err)
        return
    }
    console.log(data)
})