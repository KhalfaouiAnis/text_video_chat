import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../../RTC/socketConnection";
import CustomDivider from "../../../shared/components/CustomDivider";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <CustomDivider />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
