import React from "react";
import classes from "../styles/Home.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar, { AvatarProps } from "@mui/material/Avatar";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar} variant="regular">
        <Typography variant="h4" color="#e6fcf5">
          Chat with Bot
        </Typography>
        <Avatar
          alt="Alpha Sharp"
          src="https://raw.githubusercontent.com/Zarriy/chatwithStranger/main/public/chatbot.png"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
