import React from "react";
import styled from "styled-components";

export default function Button({ texte, width, height, fontSize }) {
  const ButtonStyle = styled.button`
    color: black;
    border-radius: 40px;
    width: ${width};
    height: ${height};
    box-shadow: 0 4px 3px 0 rgba(0,0,0,0.5);
    font-size: ${fontSize};
    border:none;
    outline: none;
    cursor: pointer;
    background-size: 150% auto;
    transition: 1s;
    background-image: linear-gradient(to top right, #0D3C62 20%, #3D8FD1 );

    &:hover {
      background-position: right center;
    }
    
  `;
  return (
    <>
      <ButtonStyle primary>{texte}</ButtonStyle>
    </>
  );
}
