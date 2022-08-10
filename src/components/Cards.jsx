import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addFrameworks,
  decrementScore,
  frameworkList,
  incrementScore,
  selectCard,
  toggleGameOver,
} from "../features/card/cardSlice";
import Card from "./Card";
const Cards = () => {
  const cards = useSelector(selectCard);
  const dispatch = useDispatch();

  const [flippedCards, setFlippedCards] = useState([]);
  const [solvedCards, setSolvedCards] = useState([]);

  // add cardList to state
  useEffect(() => {
    const duplicatedFrameworkList = [...frameworkList, ...frameworkList].sort(
      () => Math.random() - 0.5
    );
    dispatch(
      addFrameworks(
        duplicatedFrameworkList.map((framework) => {
          return {
            ...framework,
            id: nanoid(),
          };
        })
      )
    );
  }, [frameworkList]);

  useEffect(() => {
    //check flipped cards and set score
    if (flippedCards.length === 2) {
      if (
        flippedCards[0].name === flippedCards[1].name &&
        flippedCards[0].id !== flippedCards[1].id
      ) {
        console.log("same cards!");
        setSolvedCards([...solvedCards, flippedCards[0], flippedCards[1]]);
        setFlippedCards([]);
        dispatch(incrementScore());
      } else {
        dispatch(decrementScore());
        setTimeout(() => {
          setFlippedCards([]);
        }, 700);
      }
    }

    //if every card has been solved finish the game
    if (solvedCards.length === frameworkList.length * 2) {
      setTimeout(() => {
        dispatch(toggleGameOver());
      }, 1000);
    }
  }, [flippedCards, solvedCards]);

  return (
    <Wrapper>
      {cards?.cardList.map((card) => {
        return (
          <Card
            onClickFunc={() => {
              if (
                // flip the card
                flippedCards.length < 2 &&
                !solvedCards.includes(card) &&
                !flippedCards.includes(card)
              ) {
                setFlippedCards([...flippedCards, card]);
              }
            }}
            flipped={flippedCards.includes(card)}
            solved={solvedCards.includes(card)}
            card={card}
            key={card.id}
          />
        );
      })}
    </Wrapper>
  );
};

export default Cards;
const Wrapper = styled.div`
  perspective: 950px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  max-width: 600px;
  margin: 0 auto;
`;
