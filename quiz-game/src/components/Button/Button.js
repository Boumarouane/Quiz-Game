import React from "react";
import styled from "styled-components";

export default function Button({ texte, width, height, fontSize, maxWidth }) {
  const ButtonStyle = styled.button`
    color: black;
    border-radius: 40px;
    width: ${width};
    height: ${height};
    margin: 2rem 0.3rem 1rem 0.3rem;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.5);
    font-size: ${fontSize};
    border: none;
    outline: none;
    cursor: pointer;
    background-size: 150% auto;
    transition: 1s;
    background-image: linear-gradient(to top right, #0d3c62 20%, #3d8fd1);

    @media (max-width: 430px) {
        width:${maxWidth};
  }

    &:hover {
      background-position: right center;
    }
  `;
  return (
    <>
      <ButtonStyle >{texte}</ButtonStyle>
    </>
  );
}
