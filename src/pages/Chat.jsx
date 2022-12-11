import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";

import { ChatContainer } from "../components/ChatContainer";
import { Contacts } from "../components/Contacts";
import { Welcome } from "../components/Welcome";
import { allUsersRoute, host, verifyUserRoute } from "../utils/APIRoutes";
import { getJWT, removeJWT } from "../utils/localStorage";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export const Chat = () => {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const handleContacts = async () => {
      if (!currentUser) {
        return;
      }
      if (currentUser.isAvatarImageSet) {
        const { data } = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data);
        return;
      }
    };
    handleContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!getJWT()) {
        navigate("/login");
        return;
      }
      const { data } = await axios.post(verifyUserRoute, { token: getJWT() });

      if (!data?.status) {
        removeJWT();
        navigate("/login");
        return;
      }
      setCurrentUser(data.user);
      setIsLoaded(true);
    };
    verifyUser();
  }, [navigate]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className="container">
        <Contacts
          contacts={contacts}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />
        {isLoaded && currentChat === undefined && (
          <Welcome currentUser={currentUser} />
        )}
        {isLoaded && currentChat && (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        )}
      </div>
    </Container>
  );
};
