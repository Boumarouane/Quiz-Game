import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";
import Input from "../Input/Input";

const Container = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContainerOne = styled.div`
  background-image: url(${imgBackground});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`;

const ContainerTwo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const LineContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height:0%;
`
const Line = styled.div`
height: 1px;
border: 1px solid black;
margin:0 5% -5% 5%;

`
const Paragraphe = styled.p`
font-size:20px;
`

const Recovery = () => {
  return (
    <Container>
      <ContainerOne>
        <QuizGameSvg
          className="inscriptionSvg"
          texteOne="Mot de passe"
          texteTwo="oublié ?"
          positionX="50%"
          positionY="50%"
          positionTwoX="50%"
          positionTwoY="64%"
          classNameTwo="mediaGameSvg"
        />
      </ContainerOne>
      <ContainerTwo>
        <Input texte="email" value="email" htmlFor="email" />
        <Button
          texte="Récupération"
          width="20rem"
          height="3em"
          fontSize="20px"
          maxWidth="18rem"
        />
        <LineContainer>
          <Line></Line>
          <Paragraphe>Or</Paragraphe>
          <Line></Line>
        </LineContainer>
        <Button
          texte="Connexion"
          width="20rem"
          height="3em"
          fontSize="20px"
          maxWidth="18rem"
          link="/login"
        />
      </ContainerTwo>
    </Container>
  );
};

export default Recovery;
