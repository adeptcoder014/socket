import "./App.css";
import {
  TextField,
  Box,
  Card,
  Typography,
  Button,
  FormGroup,
  Input,
  FormControl
} from "@mui/material";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
//================================================

function App() {

  const [id, setId] = useState("")
  const [server, setServer] = useState("")


  const socket = io("http://localhost:5000");
  useEffect(() => {

    socket.on("connect", () => {
      setId(socket.id)
    })
    socket.on("mesFromServer", (res) => setServer(res))

    // return () => socket.emit('end'); //Close socket on UNMOUNT

  }, [])


  const handleSubmit = (event) => {
    let message = document.getElementById("inputField").value
    let room = document.getElementById("inputField1").value

    append(message)
    socket.emit("send-message-to-server", message, room)
    event.preventDefault();
    document.getElementById('inputField').value = ""
    if (document.getElementById("inputField").value === '') return


  }
  const joinRoom = () => {

      let room = document.getElementById("inputField1").value
      console.log(room)
      socket.emit("join-room", room)

    
  }
  //===============================
  const append = (value) => {
    let div = document.createElement("div")
    div.textContent = value
    document.getElementById("container").append(div)
  }

  return (
    <>

      {/* ============================================================= */}
      <Typography id="Label">{server}</Typography>

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Typography id="Label">Connected with : {id}</Typography>
        <Card
          sx={{
            backgroundColor: "pink",
            width: "50%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}>
          <div id="container" style={{ color: "gray", fontSize: 21, padding: 5 }}>
          </div>
        </Card>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField id="inputField" type="text" sx={{ mt: 5 }} />
            <Button
              type="submit"

            >
              Send
            </Button>
            <TextField label='room' id="inputField1" type="text" sx={{ mt: 5 }} />

            <Button
              type="submit"
              id='room'
              onClick={joinRoom}

            >
              Room
            </Button>

          </Box>
        </form>
      </Box>
    </>
  );
}
export default App;