import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";

import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled("div")({
  display: "flex",
  flexGrow: 1,
  backgroundColor: "var(--light-gray-color)",
  marginTop: "48px",
});

const Messenger = () => {
  const { chosenChatDetails } = useSelector(({ chat }) => chat);
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

export default Messenger;
