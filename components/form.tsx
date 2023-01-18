import React, { useState } from "react";
import classes from "../styles/Home.module.css";
import { TextField, Button } from "@mui/material";

const Form: React.FC<{ recUserResp: (value: string) => void }> = (props) => {
  // const inputMessage = useRef<HTMLInputElement>();
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // const message = inputMessage.current!.value;
    props.recUserResp(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSendMessage} className={classes.inputContainer}>
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
      >
        Send
      </Button>
    </form>
  );
};

export default Form;
