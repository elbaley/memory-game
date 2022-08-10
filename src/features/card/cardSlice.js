import { createSlice, nanoid } from "@reduxjs/toolkit";
export const frameworkList = [
  {
    id: nanoid(),
    name: "Angular",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/angularjs.png?raw=true",
  },
  {
    id: nanoid(),
    name: "React",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/react.png?raw=true",
  },
  {
    id: nanoid(),
    name: "Babel",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/babel.png?raw=true",
  },
  {
    id: nanoid(),
    name: "Bluebird",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/bluebird.png?raw=true",
  },
  {
    id: nanoid(),
    name: "Coffescript",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/coffeescript.png?raw=true",
  },
  {
    id: nanoid(),
    name: "d3",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/d3.png?raw=true",
  },
  {
    id: nanoid(),
    name: "ember",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/ember.png?raw=true",
  },
  {
    id: nanoid(),
    name: "express",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/expressjs.png?raw=true",
  },
  {
    id: nanoid(),
    name: "gulp",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/gulp.png?raw=true",
  },
  {
    id: nanoid(),
    name: "next",
    flipped: false,
    image:
      "https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/next.js.png?raw=true",
  },
];

const initialState = {
  gameOver: false,
  score: 100,
  cardList: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addFrameworks: (state, action) => {
      if (state.cardList.length === 0) {
        state.cardList = action.payload;
      }
    },
    incrementScore: (state) => {
      state.score += 50;
    },
    decrementScore: (state) => {
      state.score -= 10;
    },
    toggleGameOver: (state) => {
      state.gameOver = !state.gameOver;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleGameOver,
  incrementScore,
  decrementScore,
  flipCard,
  addFrameworks,
} = cardSlice.actions;

// Select
export const selectCard = (state) => state.card;

export default cardSlice.reducer;
