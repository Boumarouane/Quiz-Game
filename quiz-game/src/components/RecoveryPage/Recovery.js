import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../firebase/Encapsule";

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
  justify-content: center;
  align-items: center;
  height: 0%;
`;
const Line = styled.div`
  height: 1px;
  border: 1px solid black;
  margin: 0 5% -5% 5%;
`;
const Paragraphe = styled.p`
  font-size: 20px;
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

const Recovery = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .passwordRecovery(email)
      .then(() => {
        setErrorMessage(null);
        setEmail("");
        setSuccessMessage("Consultez votre adresse email pour changer le mdp");
        setTimeout(() => {
          props.history.push("/login");
        }, 5000);
      })
      .catch((error) => {
        setErrorMessage(error);
        setEmail("");
      });
  };
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
      <ContainerTwo onSubmit={handleSubmit}>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage.message}</p>}

        <div className="body">
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="text"
              value={email}
              type="email"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="email">
              <span className="content-name">email</span>
            </label>
          </div>
        </div>
        <Button
          texte="Récupération"
          width="24.7rem"
          height="3em"
          fontSize="30px"
          maxWidth="18rem"
        />
        <LineContainer>
          <Line></Line>
          <Paragraphe>Or</Paragraphe>
          <Line></Line>
        </LineContainer>
        <ButtonStyle to="/login">Connexion</ButtonStyle>
      </ContainerTwo>
    </Container>
  );
};

export default Recovery;
