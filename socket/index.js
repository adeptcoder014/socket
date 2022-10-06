const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://localhost:3001']
    }
})

io.on('connect', socket => {
    // console.log("aaya --->", socket.id)
    socket.on("send-message-to-server", (mes,room) => {
        console.log("Client:", mes)
        if(room ===""){

            socket.emit("mesFromServer",mes)
        }else{
            socket.to(room).emit("mesFromServer",mes)
        }

        socket.on('join-room',(room)=>{
        socket.join(room).emit("mesFromServer",mes)})
    }
    )

})