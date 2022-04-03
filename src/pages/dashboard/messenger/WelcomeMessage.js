import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: "white" }}>
        Please choose a conversation to start chatting
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
