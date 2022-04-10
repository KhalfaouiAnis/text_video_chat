import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";

import { sendDirectMessage } from "../../../RTC/socketConnection";

const MainContainer = styled("div")({
  width: "90%",
  height: "60px",
  dispaly: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  border: "1px solid gray",
});

const Input = styled("input")({
  backgroundColor: "white",
  width: "89%",
  height: "25px",
  border: "1px solid gray",
  borderRadius: "4px",
  marginTop: "13px",
  marginBottom: "10px",
  marginLeft: "38px",
  color: "black",
  fontSize: "14px",
  padding: "10px 10px",
});

const NewMessageInput = () => {
  const { chosenChatDetails } = useSelector(({ chat }) => chat);
  const initialState = `Type a new message to ${chosenChatDetails.name}`;
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
    <Input
      className="new-message-input"
      style={{ "--placeholder-color": color || "gray" }}
      placeholder={placeholder}
      value={message}
      onChange={handleMessageValueChange}
      onKeyDown={handleKeyPressed}
    />
  );
};

export default NewMessageInput;
