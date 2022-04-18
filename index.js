const http = require('http');
const app = require('./app');
const PORT = 9006;

http.createServer(app).listen(PORT,()=>{
    console.log("server is running on port number 9006");
})