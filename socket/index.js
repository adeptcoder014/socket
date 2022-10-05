import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

// const io = new Server(5000,{
//     cors:{
//         origin:['http://localhost:3001']
//     }})
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)


// io.on("connection", (socket) => (
//     console.log("aaya --->",socket)
// ))
httpServer.listen(5000, () => { console.log("server started") })

io.on("connection", (socket )=>{
    console.log("Hello from the server's side" + socket.id)
})