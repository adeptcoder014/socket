const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://localhost:3001']
    }
})

io.on('connection', socket => {
    console.log("aaya --->",socket.id)
})

