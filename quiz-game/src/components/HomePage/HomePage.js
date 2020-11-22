import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";

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
const HomePage = () => {
  return (
    <Container>
      <ContainerEmpty>
        <QuizGameSvg 
        texteOne="Quiz"
        positionX="50%"
        positionY="80%"
        texteTwo="Game"
        positionTwoX="55%"
        positionTwoY="96%"
        className="mediaQuizSvg"
        />
      </ContainerEmpty>
      <ContainerButton>
        <Button
          texte="Connexion"
          width="24.7rem"
          height="3em"
          fontSize="30px"
          maxWidth="18rem"
        />
        <Button
          texte="Inscription"
          width="24.7rem"
          height="3em"
          fontSize="30px"
          maxWidth="18rem"
        />
      </ContainerButton>
    </Container>
  );
};

export default HomePage;
