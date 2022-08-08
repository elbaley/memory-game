import styled from "styled-components";

const Cards = () => {
  const myArray = Array(25)
    .fill(null)
    .map((_, i) => i);
  return (
    <Wrapper>
      {/* Single Card */}
      {/* <div
        onClick={(e) => {
          e.target.parentElement.classList.toggle("is-flipped");
        }}
        className='card'
      >
        <div className='card-face card-face--front'></div>
        <div className='card-face card-face--back'>
          <img
            src='https://github.com/samiheikki/javascript-guessing-game/blob/master/static/logos/bower.png?raw=true'
            className='logo'
          />
        </div>
      </div> */}

      {myArray.map((item) => {
        return (
          <div
            key={item}
            onClick={(e) => {
              e.target.parentElement.classList.toggle("is-flipped");
            }}
            className='card'
          >
            <div className='card-face card-face--front'></div>
            <div className='card-face card-face--back'>Back Side</div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Cards;
const Wrapper = styled.div`
  perspective: 800px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  max-width: 600px;
  margin: 0 auto;
  .card {
    position: relative;
    height: 100px;
    width: 100px;
    transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform-style: preserve-3d;
  }
  .card-face {
    border-radius: 1rem;
    box-shadow: var(--shadow-3);
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .card-face--front {
    /* background: red; */
  }
  .card-face--front:after {
    content: "?";
    font-size: 3rem;
    position: absolute;
    inset: 40%;
  }
  .card-face--back {
    /* background: blue; */
    background-color: aliceblue;
    display: grid;
    place-content: center;

    transform: rotateY(180deg);
  }
  .logo {
    max-width: 80px;
    object-fit: contain;
  }
  .is-flipped {
    transform: rotateY(180deg);
  }
`;
