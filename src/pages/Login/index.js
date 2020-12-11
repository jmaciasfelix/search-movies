import React, { useState } from "react";
import styled from "styled-components";
//wouter
import { Link } from "wouter";

const Wrapper = styled.section`
  border: 1px solid red;
  height: 100%;

  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    text-align: right;
    cursor: pointer;
  }
  label {
    font-size: 14px;
  }
  i {
    cursor: pointer;
  }
`;
const FormLogin = styled.form`
  //border: 1px solid blue;
  margin-top: 10%;
  padding: 10px 40px;
  input {
    display: block;
    width: 100%;
    padding: 5px 2px;
  }
  button {
    margin-right: 0;
    float: right;
  }
`;
const FieldPassword = styled.div``;

export const Login = () => {
  const [isHidden, setHidden] = useState(false);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const isDisabled = () => !(user && password);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handleLogin");
  };

  return (
    <Wrapper>
      <Link>
        <p>Register</p>
      </Link>
      <FormLogin>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <FieldPassword>
          <label htmlFor="lname">Password</label>
          <input
            type={isHidden ? "password" : "text"}
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i type="button" onClick={() => setHidden(!isHidden)}>
            👀
          </i>
        </FieldPassword>
        <button type="submit" onClick={handleLogin} disabled={isDisabled()}>
          Login
        </button>
      </FormLogin>
    </Wrapper>
  );
};
