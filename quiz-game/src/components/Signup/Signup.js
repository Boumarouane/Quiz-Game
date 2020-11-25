import React, { useState, useContext } from "react";
import { FirebaseContext } from "../firebase/Encapsule";
import Button from "../Button/Button";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";
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

const Signup = (props) => {
  
  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { email, password } = loginData;
    e.preventDefault();
    firebase
      .signupUser(email, password)
      .then(() => {
        setLoginData({ ...data });
        props.history.push("/welcome")
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  const { pseudo, email, password, confirmPassword } = loginData;

  // Vérifier si la personne à mis la bonne confirmation de mot de passe sinon un message d"erreur rouge et border rouge

  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <Container>
      <ContainerOne>
        <QuizGameSvg
          className="inscriptionSvg"
          texteOne="Inscription"
          positionX="50%"
          positionY="50%"
        />
      </ContainerOne>
      <ContainerTwo onSubmit={handleSubmit}>
        {errorMsg}
        <div className="body">
          <div className="form">
            <input
              onChange={handleChange}
              id="pseudo"
              name="text"
              value={pseudo}
              type="text"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="pseudo">
              <span className="content-name">Pseudo</span>
            </label>
          </div>
        </div>
        <div className="body">
          <div className="form">
            <input
              onChange={handleChange}
              id="email"
              name="text"
              value={email}
              type="text"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="email">
              <span className="content-name">email</span>
            </label>
          </div>
        </div>
        <div className="body">
          <div className="form">
            <input
              onChange={handleChange}
              id="password"
              name="text"
              value={password}
              type="password"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="password">
              <span className="content-name">Mot de passe</span>
            </label>
          </div>
        </div>
        <div className="body">
          <div className="form">
            <input
              onChange={handleChange}
              id="confirmPassword"
              name="text"
              value={confirmPassword}
              type="password"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="password">
              <span className="content-name">Confirmation</span>
            </label>
          </div>
        </div>

        <Button
          texte="Inscription"
          width="20rem"
          height="3em"
          fontSize="20px"
          maxWidth="18rem"
        />

        <p>
          Déjà inscrit ?
          <Link to="/login" style={{ color: "black" }}>
            Connectez-vous
          </Link>
        </p>
      </ContainerTwo>
    </Container>
  );
};

export default Signup;
