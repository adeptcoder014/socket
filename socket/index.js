import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)


io.on("connection", (socket) => (
    console.log("socket", socket)
))
httpServer.listen(5000, () => { console.log("server started") })