import React, { useEffect } from "react";
import classes from "../styles/Home.module.css";
import { useSelector } from "react-redux";

const ChatContainer: React.FC = () => {
  const messages = useSelector((state: any) => state.chat.messages);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div className={classes.chatContainer}>
      {/* <div className={`${classes.chatbubble} ${classes.user}`}>Hi</div>
      <div className={`${classes.chatbubble} ${classes.bot}`}>Hello</div> */}
    </div>
  );
};
export default ChatContainer;
