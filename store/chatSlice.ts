import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface chatMessage {
  isUser: boolean;
  message: string;
}

interface chatMessages {
  messages: chatMessage[];
}

const initialState: chatMessages = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export default chatSlice;
