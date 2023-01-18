import React, { useEffect } from "react";
import classes from "../styles/Home.module.css";
import { useSelector } from "react-redux";

const ChatContainer: React.FC = () => {
  const messages = useSelector((state: any) => state.chat.messages);

  return (
    <div className={classes.chatContainer}>
      {messages.length > 0 &&
        messages.map((mes: { message: string; user: boolean }, i: number) => (
          <div
            key={i}
            className={`${classes.chatbubble} ${
              mes.user ? `${classes.user}` : `${classes.bot}`
            }`}
          >
            {mes.message}
          </div>
        ))}
    </div>
  );
};
export default ChatContainer;
