import React from "react";
// import styled from "styled-components";

const Input = ({ texte, htmlFor }) => {
  return (
    <div className="body">
      <div className="form">
        <input
          name="text"
        //   value={value}
          type="text"
          autoComplete="off"
          required
        />
        <label className="label-name" htmlFor={htmlFor}>
          <span className="content-name">{texte}</span>
        </label>
      </div>
    </div>
  );
};

export default Input;
