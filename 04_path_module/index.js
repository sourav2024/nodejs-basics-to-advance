
const path = require("path")

console.log("Directory name: ", path.dirname(__filename))

console.log("File Name", path.basename(__filename))

console.log("file extension", path.extname(__filename))

const joinPath = path.join("/user", 'documents', "node", "projects")
console.log("joined Path", joinPath)

const resolvePath = path.resolve("user", "documents", "node", "projects");
console.log("Resolve path::", resolvePath)

const normalizePath = path.normalize("/user/documents/../node/projects")
console.log("normalize path",  normalizePath)