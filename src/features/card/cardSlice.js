import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameOver: false,
  score: 100,
  cardList: [
    {
      id: 1,
      content: "JS",
    },
    {
      id: 2,
      content: "PHP",
    },
  ],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cardSlice.actions;

// Select
export const selectCard = (state) => state.card;

export default cardSlice.reducer;
