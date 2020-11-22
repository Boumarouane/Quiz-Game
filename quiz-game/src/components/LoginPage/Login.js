import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";
import Input from "../Input/Input";
import { Link } from "react-router-dom";


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

const LinkTexte = styled(Link)`
/* text-decoration:none; */
color:black;
`

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
        <p>Mot de passe oublié ? 
            <LinkTexte to="/recovery"> Récupérez-le ici</LinkTexte></p>
        <Button
          texte="Connexion"
          width="20rem"
          height="3em"
          fontSize="20px"
          maxWidth="18rem"
          link="/welcome"
        />

        <p>Nouveau sur Quiz Game ? <LinkTexte to="/signup">Inscrivez-vous maintenant</LinkTexte></p>
      </ContainerTwo>
    </Container>
  );
};

export default Login;
