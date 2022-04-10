import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
  marginTop: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NewConversation = ({ username }) => {
  return (
    <MainContainer>
      <Typography variant="h4">
        Start A new Conversation with{" "}
        <span style={{ color: "#067ac0" }}>{username}</span>
      </Typography>
    </MainContainer>
  );
};

export default NewConversation;
