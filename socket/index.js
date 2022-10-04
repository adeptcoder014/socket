import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.get("/",(req,res)=>{
    res.send("<h1>Hello Socket.io</h1>")
})
io.on("connection", (socket) => (
    console.log("aaya --->",socket)
))
httpServer.listen(5000, () => { console.log("server started") })