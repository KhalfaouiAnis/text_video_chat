import React from "react";
import { styled } from "@mui/system";
import { Tooltip, Typography } from "@mui/material";
import { formats } from "../../../../shared/utils/dateUtils";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
  padding: "5px",
  borderRadius: "var(--msgBorderRadius)",
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
  borderRadius: "var(--msgBorderRadius)",
  padding: "2px 4px",
});
const SameAuthorMessageContent = styled("div")({
  marginTop: "4px",
  padding: "5px",
  borderRadius: "var(--msgBorderRadius)",
  color: "var(--black-color)",
  maxWidth: "700px",
});
const SameAuthorMessageText = styled("span")({
  wordBreak: "break-word",
  borderRadius: "var(--msgBorderRadius)",
  padding: "2px 4px",
});
const MessageHeader = styled("div")({
  padding: "2px",
  display: "flex",
  alignItems: "center",
});

const dateWrapper = ({ children, title }) => {
  return <Tooltip title={title}>{children}</Tooltip>;
};

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
          <dateWrapper title={date.format(formats.MESSAGE_TOOLTIP)}>
            <span style={{ fontSize: "12px", color: "#72767d" }}>
              {date.format(formats.MESSAGE)}
            </span>
          </dateWrapper>
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
          <dateWrapper title={date.format(formats.MESSAGE_TOOLTIP)}>
            <span
              className="m-left"
              style={{ fontSize: "12px", color: "#72767d" }}
            >
              {date.format(formats.MESSAGE)}
            </span>
          </dateWrapper>
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
