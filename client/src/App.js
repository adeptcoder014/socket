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
  const [data, setData] = useState({ d: "" })
  const socket = io("http://localhost:3001");
  socket.on("connection", () => {
    console.log("--->")
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
        <FormGroup>
          <FormControl
            type="text"
            value={packet}
            placeholder="Type a message here ..."
            autoFocus
          />
          <Input
            id="x"
            defaultValue={packet}
            onChange={(e) => setData({
              ...data,
              d: e.target.value
            })} />
          <Button
            type="submit"
            onClick={() =>{
              setPacket(packet.concat(data.d))
              document.getElementById("x").value=''
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












// // client/src/pages/chat/send-message.js

// import styles from './styles.module.css';
// import React, { useState } from 'react';

// const SendMessage = ({ socket, username, room }) => {
//   const [message, setMessage] = useState('');

//   const sendMessage = () => {
//     if (message !== '') {
//       const __createdtime__ = Date.now();
//       // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
//       socket.emit('send_message', { username, room, message, __createdtime__ });
//       setMessage('');
//     }
//   };

//   return (
//     <div className={styles.sendMessageContainer}>
//       <input
//         className={styles.messageInput}
//         placeholder='Message...'
//         onChange={(e) => setMessage(e.target.value)}
//         value={message}
//       />
//       <button className='btn btn-primary' onClick={sendMessage}>
//         Send Message
//       </button>
//     </div>
//   );
// };

// export default SendMessage;
