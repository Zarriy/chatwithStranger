import React from "react";
import classes from "../styles/Home.module.css";
import Header from "@/components/header";
import Form from "@/components/form";

const Chat: React.FC = () => {
  return (
    <div className={classes.chatPage}>
      <Header />
      <div className={classes.chatContainer}></div>
      <Form />
    </div>
  );
};

export default Chat;
