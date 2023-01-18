import React, { useState, useEffect } from "react";
import classes from "../styles/Home.module.css";
import Header from "@/components/header";
import Form from "@/components/form";
import ChatContainer from "@/components/chatContainer";
import {
  useGetWordQuery,
  useGetAnotherWordMutation,
} from "./api/getRandomWord";

const Chat: React.FC = () => {
  const [response, setResponse] = useState("");
  const { data, error, isLoading } = useGetWordQuery("get");
  const [getAnotherWord, result] = useGetAnotherWordMutation();

  const handleClick = () => {
    getAnotherWord("get").then((res) => console.log(res.data[0]));
  };

  return (
    <div className={classes.chatPage}>
      <Header />
      <ChatContainer />
      <button onClick={handleClick}>click</button>
      <Form />
    </div>
  );
};

export default Chat;
