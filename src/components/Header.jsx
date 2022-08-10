import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCard } from "../features/card/cardSlice";

const Header = () => {
  const game = useSelector(selectCard);
  return (
    <Wrapper>
      <h2>Memory Game</h2>
      <p>
        Match the cards and win <span className='win'>50 points</span>! If the
        cards do not match you will lose <span className='lose'>10 points</span>
        !
      </p>
      <span>
        <strong>Score:</strong> {game.score}
      </span>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.section`
  text-align: center;
  .win {
    color: #4e9f3d;
    font-weight: bold;
  }
  .lose {
    font-weight: bold;
    color: #c13131;
  }
`;
