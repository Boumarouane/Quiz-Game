import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  /* height: 100%;
  width: 100%; */
`;

const ContainerEmpty = styled.div`
  width: 100%;
  background-color: black;
`;

const ContainerButton = styled.div`
  width: 100%;
  background-color: gold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const HomePage = () => {
  return (
    <Container>
      <ContainerEmpty></ContainerEmpty>
      <ContainerButton>
        <Button texte="Connexion" width="400px" height="90px" fontSize="30px" />
        <Button
          texte="Inscription"
          width="400px"
          height="90px"
          fontSize="30px"
        />
      </ContainerButton>
    </Container>
  );
};

export default HomePage;
