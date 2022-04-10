import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import moment from "moment";

import Message from "./Message";
import NewConversation from "./NewConversation";
import DateSeperator from "./DateSeperator";

const MainContainer = styled("div")({
  height: "calc(97% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const MessagesContainer = styled("div")({
  width: "97.3%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const MessageContainer = styled("div")({
  display: "flex",
});

const WithDateSeparatorContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = () => {
  const {
    messages,
    chosenChatDetails: { name },
  } = useSelector(({ chat }) => chat);
  const { _id } = useSelector(({ auth }) => auth.userDetails);

  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  }, [messages]);

  return (
    <MainContainer ref={containerRef}>
      <MessagesContainer>
        {messages.length <= 0 && <NewConversation username={name} />}
        {messages.length >= 0 &&
          messages.map((message, index) => {
            const momentDate = moment(message.date.toString());
            const sameAuthor =
              index > 0 &&
              messages[index].author._id === messages[index - 1].author._id;

            const sameDay =
              index > 0 &&
              convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
                convertDateToHumanReadable(
                  new Date(messages[index - 1].date),
                  "dd/mm/yy"
                );

            const direction = _id === message.author._id ? "end" : "start";
            const sameSender = _id === message.author._id;

            if (!sameDay || index === 0) {
              return (
                <WithDateSeparatorContainer
                  key={message._id}
                  style={{ justifyContent: direction }}
                >
                  <DateSeperator date={momentDate.format("MMM Do, YYYY LT")} />
                  <MessageContainer style={{ justifyContent: direction }}>
                    <Message
                      {...message}
                      sameSender={sameSender}
                      date={momentDate}
                      sameAuthor={sameAuthor}
                      sameDay={sameDay}
                      index={index}
                      length={messages.length}
                    />
                  </MessageContainer>
                </WithDateSeparatorContainer>
              );
            }

            return (
              <MessageContainer
                style={{ justifyContent: direction }}
                key={message._id}
              >
                <Message
                  {...message}
                  sameSender={sameSender}
                  date={momentDate}
                  sameAuthor={sameAuthor}
                  sameDay={sameDay}
                  index={index}
                  length={messages.length}
                />
              </MessageContainer>
            );
          })}
      </MessagesContainer>
    </MainContainer>
  );
};

export default Messages;
