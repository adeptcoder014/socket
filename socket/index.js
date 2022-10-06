const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://localhost:3000']
    }
})

io.on('connection', socket => {
    console.log("aaya --->", socket.id)
    socket.on("server", (mes) => {
        console.log("Client:", mes)
        if (mes) {
            socket.emit("client", " No")
        }
    }


    )

})

