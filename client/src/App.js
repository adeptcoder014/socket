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
import io from "socket.io-client";
import { useEffect, useState } from "react";
//================================================

function App() {
  const [packet, setPacket] = useState([])
  const [data, setData] = useState({
    d: ""
  })
  const socket = io("http://localhost:3001");
  socket.emit("connection", (socket) => {
    console.log("--->", socket)
  })
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
          <ul>
            {packet.map(x =>

              <li>
                {x}
              </li>


            )}
          </ul>
        </Card>
        {/* ============================================================= */}
        <FormGroup>
          <FormControl
            type="text"
            value={packet}
            autoFocus
          />
          <Input
            placeholder="Type a message here ..."
            id="x"
            onChange={(e) =>
              setData({
                ...data,
                d: e.target.value

              })
            } />
          <Button
            type="submit"
            onClick={() => {
              if (document.getElementById("x").value === '') return
              setPacket(packet.concat(data.d))
              document.getElementById("x").value = ''
            }}
          >
            Send
          </Button>

        </FormGroup>
      </Box>
    </>
  );
}
export default App;