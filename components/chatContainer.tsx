import React from "react";
import classes from "../styles/Home.module.css";

const ChatContainer: React.FC = () => {
  return (
    <div className={classes.chatContainer}>
      <div className={`${classes.chatbubble} ${classes.user}`}>Hi</div>
      <div className={`${classes.chatbubble} ${classes.bot}`}>Hello</div>
      <div className={`${classes.chatbubble} ${classes.user}`}>Hi</div>
      <div className={`${classes.chatbubble} ${classes.bot}`}>Hello</div>
      <div className={`${classes.chatbubble} ${classes.user}`}>Hi</div>
      <div className={`${classes.chatbubble} ${classes.bot}`}>Hello</div>
    </div>
  );
};
export default ChatContainer;
