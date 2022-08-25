const http = require('node:http').createServer();
const port = '3000'
const io = require('socket.io')(http, {
    cors:{ origin:  "*"}
})

io.on('connection', (socket)  => {
    console.log(`User ${socket.id} connected`)

    socket.on('disconnect', ()=> {
        console.log(`User ${socket.id} disconnected`)
    })
    
    socket.emit("messageFromServer", `Welcome to the wonderful chat ${socket.id.substr(0,2)}`)

    socket.on("messageFromClient",(messageFromClient)=>{
        socket.emit("messageFromServer", `${socket.id.substr(0,2)} said : ${messageFromClient}`)

        socket.broadcast.emit('broadcast-message', `${socket.id.substr(0,2)} said : ${messageFromClient}`)
    })
})

http.listen(port, (e) => {
    if(e) console.log("Oops, something went wrong", e)
    else console.log("Server is running on : " + port )
})