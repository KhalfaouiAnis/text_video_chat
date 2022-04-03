import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Avatar from "../../../../shared/components/Avatar";
import OnlineIndicator from "./OnlineIndicator";
import TextFormatter from "../../../../shared/components/TextFormatter";

import {
  chatTypes,
  setChosenChatDetails,
} from "../../../../store/actions/chatActions";

const FriendsListItem = ({ id, username, isOnline }) => {
  const dispatch = useDispatch();

  const handleChooseActiveConversation = () => {
    dispatch(setChosenChatDetails({ id, name: username }, chatTypes.DIRECT));
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: "700",
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        <TextFormatter text={username} len={25} />
      </Typography>
      <OnlineIndicator color={isOnline ? "#3ba55d" : "gray"} />
    </Button>
  );
};

export default FriendsListItem;
