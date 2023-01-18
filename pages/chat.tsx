import Head from "next/head";
import React, { useState, useEffect } from "react";
import classes from "../styles/Home.module.css";
import Header from "@/components/header";
import Form from "@/components/form";
import ChatContainer from "@/components/chatContainer";
import { useGetAnotherWordMutation } from "./api/getRandomWord";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "@/store/store";

const Chat: React.FC = () => {
  const [getAnotherWord, result] = useGetAnotherWordMutation();
  const messages = useSelector((state: any) => state.chat.messages);
  const dispatch = useDispatch();

  const handlingResponse = (value: string) => {
    dispatch(addMessage({ user: true, message: value }));

    if (value.startsWith("/delay")) {
      let delay = Number(value.split(" ")[1]);
      let msg = value.split(" ")[2];
      setTimeout(() => {
        dispatch(addMessage({ user: false, message: msg }));
      }, delay);
    } else {
      getAnotherWord("get").then((res) =>
        dispatch(addMessage({ user: false, message: res.data[0] }))
      );
    }
  };

  return (
    <>
      <Head>
        <title>ChatBot App</title>
        <meta name="description" content="Our Crazy little Chat Bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chatbot.png" />
      </Head>

      <div className={classes.chatPage}>
        <Header />
        <ChatContainer />
        <Form recUserResp={handlingResponse} />
      </div>
    </>
  );
};

export default Chat;
