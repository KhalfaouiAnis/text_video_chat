import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import moment from "moment";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
  padding: "5px",
  borderRadius: "10px",
  color: "var(--black-color)",
  maxWidth: "700px",
});
const MessageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const MessageContent = styled("div")({
  wordBreak: "break-word",
  borderRadius: "10px",
  padding: "2px 4px",
});
const SameAuthorMessageContent = styled("div")({
  marginTop: "4px",
  padding: "5px",
  borderRadius: "10px",
  color: "var(--black-color)",
  maxWidth: "700px",
});
const SameAuthorMessageText = styled("span")({
  wordBreak: "break-word",
  borderRadius: "10px",
  padding: "2px 4px",
});
const MessageHeader = styled("div")({
  padding: "2px",
  display: "flex",
  alignItems: "center",
});

const Message = ({
  content,
  sameAuthor,
  sameSender,
  author,
  date,
  sameDay,
}) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent
        style={
          sameSender
            ? {
                backgroundColor: "var(--receiver-msg-bgcolor)",
                borderTopRightRadius: "0px",
              }
            : {
                backgroundColor: "var(--sender-msg-bgcolor)",
                borderTopLeftRadius: "0px",
              }
        }
      >
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  if (sameSender) {
    return (
      <MainContainer
        style={{
          backgroundColor: "var(--receiver-msg-bgcolor)",
          borderTopRightRadius: "0px",
        }}
      >
        <MessageHeader>
          <span style={{ fontSize: "12px", color: "#72767d" }}>
            {date.format("MMM Do, YYYY LT")}
          </span>
        </MessageHeader>
        <MessageContainer>
          <MessageContent>{content}</MessageContent>
          <Typography style={{ fontSize: "16px", color: "white" }}></Typography>
        </MessageContainer>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer
        style={{
          backgroundColor: "var(--sender-msg-bgcolor)",
          borderTopLeftRadius: "0px",
        }}
      >
        <MessageHeader>
          <span className="bold">{author.username}</span>
          {/* <DateTimeContainer className="m-left"> */}
          <span
            className="m-left"
            style={{ fontSize: "12px", color: "#72767d" }}
          >
            {date.format("MMM Do, YYYY LT")}
          </span>
          {/* </DateTimeContainer> */}
        </MessageHeader>
        <MessageContainer>
          <MessageContent>{content}</MessageContent>
          <Typography style={{ fontSize: "16px", color: "white" }}></Typography>
        </MessageContainer>
      </MainContainer>
    );
  }
};

export default Message;
