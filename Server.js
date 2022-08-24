const http = require('node:http');
const port = '3000'

const server = http.createServer((req, res)=>{
    if(req.url === "/chat"){
        res.write('Welcome to the chat')
        res.end();
    }
})

server.on('connection', ()=>{
    console.log("New connection")
})

server.listen(port, (e) => {
    if(e) console.log("Oops, something went wrong", e)
    else console.log("Server is running on : " + port )
})