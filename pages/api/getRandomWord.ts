import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RandomWord {
  word: string;
}

export const RandomAPi = createApi({
  reducerPath: "RandomApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://random-word-api.herokuapp.com/",
  }),
  tagTypes: ["RandomWord"],
  endpoints: (build) => ({
    getWord: build.query<RandomWord, string>({
      query: () => "word",
      providesTags: ["RandomWord"],
    }),
    getAnotherWord: build.mutation<RandomWord, any>({
      query: () => "word",
      invalidatesTags: ["RandomWord"],
    }),
  }),
});

export const { useGetWordQuery, useGetAnotherWordMutation } = RandomAPi;
