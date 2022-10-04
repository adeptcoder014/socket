import './App.css';
import { TextField, Box } from '@mui/material';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
//================================================

const socket = io()


function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [lastPong, setLastPong] = useState(null)

  useEffect(() => {
    socket.on("connect", () => {
      console.log("xxxxxxxxxxxxxx")
      setIsConnected(true)
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
    })

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    }
  }, [])

  const sendPing = () => {
    socket.emit("ping")
  }

  return (<>
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <TextField sx={{mr:5}}label="socket.io" />
      <div>
      <p>Connected: { '' + isConnected }</p>
      <p>Last pong: { lastPong || '-' }</p>
      <button onClick={ sendPing }>Send ping</button>
    </div>
    </Box>
  </>
  );
}

export default App;
