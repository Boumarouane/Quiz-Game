import React from "react";
// import styled from "styled-components";

const Input = ({ texte, htmlFor, type, value, id, handleChange }) => {
  return (
    <div className="body">
      <div className="form">
        <input
        onChange={handleChange}
          id={id}
          name="text"
          value={value}
          type={type}
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
