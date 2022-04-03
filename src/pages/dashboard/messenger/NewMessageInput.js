import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";

import { sendDirectMessage } from "../../../RTC/socketConnection";

const MainContainer = styled("div")({
  width: "100%",
  height: "60px",
  dispaly: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "white",
  width: "97.3%",
  height: "44px",
  border: "none",
  color: "black",
  borderRadius: "22px",
  fontSize: "14px",
  padding: "0 10px",
  margin: "0 2px",
  boxShadow:
    "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
});

const NewMessageInput = () => {
  const { chosenChatDetails } = useSelector(({ chat }) => chat);
  const initialState = `write message to ${chosenChatDetails.name}`;
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [placeholder, setPlaceholder] = useState(initialState);

  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
    setColor("gray");
    setPlaceholder(initialState);
  };

  const checkEmptyMsg = () => {
    if (message.trim().length === 0) {
      setColor("crimson");
      setPlaceholder("Cannot send empty messages!");
      return true;
    }
    return false;
  };

  const handleSendMessage = () => {
    if (checkEmptyMsg()) return;
    sendDirectMessage({
      receiverUserId: chosenChatDetails.id,
      content: message,
    });
    setMessage("");
  };

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <MainContainer>
      <Input
        style={{ "--placeholder-color": color || "gray" }}
        placeholder={placeholder}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

export default NewMessageInput;
