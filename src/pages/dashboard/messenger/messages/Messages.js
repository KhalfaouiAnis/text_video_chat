import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
import DateSeperator from "./DateSeperator";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  const { chosenChatDetails, messages } = useSelector(({ chat }) => chat);
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  }, [messages]);

  return (
    <MainContainer ref={containerRef}>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
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

        return (
          <div key={message._id} style={{ width: "97.3%" }}>
            {(!sameDay || index === 0) && (
              <DateSeperator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  "dd/mm/yy"
                )}
              />
            )}
            <Message
              {...message}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              sameAuthor={sameAuthor}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Messages;
