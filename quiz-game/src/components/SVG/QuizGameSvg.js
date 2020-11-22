import React from "react";

const QuizGameSvg = ({texteOne, texteTwo, positionX, positionY,positionTwoX, positionTwoY, className, classNameTwo}) => {
  return (
    <>
      <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" >
        <rect width="100%" height="100%" fill="transparent"/>
        <text
          className={className}
          x={positionX}
          y={positionY}
          fontWeight="bold"
          textAnchor="middle"
          fill="black"
          style={{ fontFamily: "Bungee Shade, cursive, Roboto"}}
        >
          {texteOne}
        </text>
        <text
          className={classNameTwo}
          x={positionTwoX}
          y={positionTwoY}
          fontWeight="bold"
          textAnchor="middle"
          fill="black"
          style={{ fontFamily: "Bungee Shade, cursive, Roboto" }}
        >
          {texteTwo}
        </text>
      </svg>
    </>
  );
};

export default QuizGameSvg;
