import React, { useState, useEffect } from "react";
import classes from "../styles/Home.module.css";
import Header from "@/components/header";
import Form from "@/components/form";
import ChatContainer from "@/components/chatContainer";
import {
  useGetWordQuery,
  useGetAnotherWordMutation,
} from "./api/getRandomWord";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "@/store/store";

const Chat: React.FC = () => {
  const { data, error, isLoading } = useGetWordQuery("get");
  const [getAnotherWord, result] = useGetAnotherWordMutation();
  const messages = useSelector((state: any) => state.chat.messages);
  const dispatch = useDispatch();

  const handlingResponse = (value: string) => {
    dispatch(addMessage({ user: true, message: value }));
    getAnotherWord("get").then((res) => console.log(res.data[0]));
  };

  return (
    <div className={classes.chatPage}>
      <Header />
      <ChatContainer />
      <Form recUserResp={handlingResponse} />
    </div>
  );
};

export default Chat;
