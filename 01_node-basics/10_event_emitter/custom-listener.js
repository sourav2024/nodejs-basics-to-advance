const EventEmitter = require("events")

class MyCustomerEmitter extends EventEmitter{

    constructor(){
        super();
        this.greeting = "Hello"
    }

    greet(name) {
        this.emit("greeting", `${this.greeting} ,  ${name}`)
    }
}

const myCustomerEmitter = new MyCustomerEmitter();

myCustomerEmitter.on('greeting', (input) =>{
    console.log(`Greeting event`, input)
})

myCustomerEmitter.greet("Sourav")