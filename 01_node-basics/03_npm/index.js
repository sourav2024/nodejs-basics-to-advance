
const lodash = require("lodash")

const names = ["sourav", "john", "alex"]

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize)