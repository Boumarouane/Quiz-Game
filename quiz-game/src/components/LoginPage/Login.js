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

const Login = () => {
  return (
    <Container>
      <ContainerOne>
        <QuizGameSvg
          className="inscriptionSvg"
          texteOne="Connexion"
          positionX="50%"
          positionY="50%"
        />
      </ContainerOne>
      <ContainerTwo>
        <Input texte="email" value="email" htmlFor="email" />
        <Input texte="mot de passe" value="mdp" htmlFor="mdp" />
        <p>Mot de passe oublié ? Récupérez-le ici</p>
        <Button
          texte="Connexion"
          width="20rem"
          height="3em"
          fontSize="20px"
          maxWidth="18rem"
        />

        <p>Nouveau sur Quiz Game ? Inscrivez-vous maintenant</p>
      </ContainerTwo>
    </Container>
  );
};

export default Login;
