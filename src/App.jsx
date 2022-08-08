import styled from "styled-components";
import Cards from "./components/Cards";
import Header from "./components/Header";
function App() {
  return (
    <Wrapper>
      <Header />
      <Cards />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;
