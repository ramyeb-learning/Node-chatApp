const http = require('node:http').createServer();
const port = '3000'
const io = require('socket.io')(http, {
    cors:{ origin:  "*"}
})

io.on('connection', (socket)  => {
    console.log("New user connected")
    
    socket.emit("messageFromServer", "Welcome to the wonderful chat")

    socket.on("messageFromClient",(messageFromClient)=>{
        console.log(messageFromClient)
    })
})

http.listen(port, (e) => {
    if(e) console.log("Oops, something went wrong", e)
    else console.log("Server is running on : " + port )
})