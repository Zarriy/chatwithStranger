import React, { useState } from "react";
import classes from "../styles/Home.module.css";
import { TextField, Button } from "@mui/material";
import { addMessage, fetchRandomWord } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const Form: React.FC = () => {
  const messages = useSelector((state: any) => state.chat.messages);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    dispatch(addMessage({ user: true, message: message }));
    dispatch(fetchRandomWord());
    console.log(messages);
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
