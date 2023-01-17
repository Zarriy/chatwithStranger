import React, { useState } from "react";
import classes from "../styles/Home.module.css";
import { TextField, Button } from "@mui/material";

const Form: React.FC = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    console.log("send message" + message);
  };

  return (
    <div className={classes.inputContainer}>
      <TextField
        className={classes.inputField}
        id="standard-basic"
        label="Type your message"
        variant="filled"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        className={classes.sendButton}
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </div>
  );
};

export default Form;
