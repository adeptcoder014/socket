import "./App.css";
import { TextField, Box, Card, Typography } from "@mui/material";
import io from "socket.io-client";
import { useEffect, useState } from "react";
//================================================
// const socket = io();

function App() {
 const[packet, setPacket] = useState("Packet hai")

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <Card sx={{
          backgroundColor:"pink",
          width:"50%",
          height:"50%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Typography variant="h4">
            {packet}
          </Typography>
        </Card>
        <TextField  sx={{ width:"50%",mt:5 }} label="socket.io" />
      </Box>
    </>
  );
}

export default App;
