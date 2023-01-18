import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import classes from "../styles/Home.module.css";
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

declare module "@mui/material/styles" {
  interface Palette {
    basic: Palette["primary"];
  }

  interface PaletteOptions {
    basic?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    basic: {
      main: "#63e6be",
    },
  },
});
export default function Home() {
  return (
    <>
      <Head>
        <title>ChatBot App</title>
        <meta name="description" content="Talk to our Crazy Chatbot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chatbot.png" />
      </Head>
      <main className={classes.home}>
        <h1> 👋 Let&apos;s Chat</h1>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="basic"
            onClick={() => Router.push("/chat")}
          >
            <SettingsPowerIcon />
            &nbsp;Start
          </Button>
        </ThemeProvider>
      </main>
    </>
  );
}
