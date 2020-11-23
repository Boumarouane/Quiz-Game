import React from "react";
import styled from "styled-components";

export const Header = () => {
  const Container = styled.div`
    display: flex;
  `;

  const left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
  `;
  const right = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items:center;
  `;
  return (
      <>
    <Container>
      <left>
          <p>Pseudo</p>
          <p>Points</p>
          </left>
      <right>
          <p>Déconnexion</p>
      </right>
    </Container>
    <p>Copyright © 2020 - By Issam Boumarouane - Charte de confidentialité des données  </p>
    </>
  );
};
