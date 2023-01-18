import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import { RandomAPi } from "@/pages/api/getRandomWord";

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
    [RandomAPi.reducerPath]: RandomAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RandomAPi.middleware),
});
export const { addMessage } = chatSlice.actions;

export default store;
