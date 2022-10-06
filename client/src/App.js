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
//================================================

function App() {

  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("--->", socket.id)
  })

  socket.on("client", (res) => console.log("server:", res))

  const handleSubmit = (event) => {
    document.getElementById('inputField').value = ""
    event.preventDefault();
  }

  const append = (value) => {
    let div = document.createElement("div")
    div.textContent = value
    document.getElementById("container").append(div)
  }

  return (
    <>

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {/* ============================================================= */}
        <Card
          sx={{
            backgroundColor: "pink",
            width: "50%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}>
          <div id="container">
          </div>
        </Card>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input id="inputField" type="text"/>
          </label>
          <Button
            type="submit"
            onClick={() => {
              if (document.getElementById("inputField").value === '') return
              let message = document.getElementById("inputField").value
              append(message)
              socket.emit("server", message)
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </>
  );
}
export default App;