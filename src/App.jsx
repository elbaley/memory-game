import { useSelector } from "react-redux";
import styled from "styled-components";
import Cards from "./components/Cards";
import GameOverModal from "./components/GameOverModal";
import Header from "./components/Header";

function App() {
  const cards = useSelector((state) => state.card);
  return (
    <Wrapper>
      <Header />
      {cards.gameOver && <GameOverModal />}
      <Cards />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;
