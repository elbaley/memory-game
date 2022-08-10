import React from "react";
import styled from "styled-components";

const GameOverModal = () => {
  return (
    <Wrapper>
      <div className='modal'>
        <p>Game Over!</p>
        <p>
          Your score: <strong>1000</strong>!{" "}
        </p>
        <div className='buttons'>
          <button>Play Again</button>
          <button>Close</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default GameOverModal;
const Wrapper = styled.div`
  background-color: var(--modalOverlay);
  z-index: 1;
  position: fixed;
  color: var(--modalFontcolor);
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background: var(--modalBackground);
    padding: 1rem;
    border-radius: 1rem;
    width: 350px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
