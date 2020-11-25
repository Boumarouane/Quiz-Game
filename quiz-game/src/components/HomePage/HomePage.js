import React from "react";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";
import { Link } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${imgBackground});
  background-size: 100% 100%;
`;

const ContainerEmpty = styled.div`
  display:flex;
  justify-content:start;
  align-content:center;
  width: 100%;
  height: 100%;
`;

const ContainerButton = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 550px) {
    display:  flex;
    flex-direction:  column;
  }
`;

const ButtonStyle = styled(Link)`
  color: black;
  border-radius: 40px;
  width: 24.7rem;
  height: 3em;
  margin: 2rem 0.3rem 1rem 0.3rem;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.5);
  font-size: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-size: 150% auto;
  transition: 1s;
  background-image: linear-gradient(to top right, #0d3c62 20%, #3d8fd1);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    width: 18rem;
  }

  &:hover {
    background-position: right center;
  }
`;



const HomePage = () => {
  return (
    <Container>
      <ContainerEmpty>
        <QuizGameSvg
          texteOne="Quiz Game"
          positionX="50%"
          positionY="80%"
          className="mediaQuizSvg"
        />
      </ContainerEmpty>
      <ContainerButton>
        <ButtonStyle to="/login">Connexion</ButtonStyle>
        <ButtonStyle to="/signup">Inscription</ButtonStyle>
      </ContainerButton>
    </Container>
  );
};

export default HomePage;
