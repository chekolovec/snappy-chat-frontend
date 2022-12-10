import React from "react";
import styled from "styled-components";

import Robot from "../assets/robot.gif";
import { Logout } from "./Logout";

const Container = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: 10% 90%;
  flex: 1;
  .logout-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;

export const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <div className="logout-wrapper">
        <Logout />
      </div>
      <Wrapper>
        <img src={Robot} alt="robot" />
        <h1>
          Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please select a chat to start messaging</h3>
      </Wrapper>
    </Container>
  );
};
