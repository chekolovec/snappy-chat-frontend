import React from "react";
import { BiPowerOff } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { removeJWT } from "../utils/localStorage";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

export const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    removeJWT();
    navigate("/login");
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
};
