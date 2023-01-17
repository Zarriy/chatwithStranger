import React from "react";
import classes from "../styles/Home.module.css";
import Header from "@/components/header";
import Form from "@/components/form";
import ChatContainer from "@/components/chatContainer";

const Chat: React.FC = () => {
  return (
    <div className={classes.chatPage}>
      <Header />
      <ChatContainer />
      <Form />
    </div>
  );
};

export default Chat;
