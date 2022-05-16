import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "../../../assets/images/welcome_chat_image.webp";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-arround",
});

const ImageWrapper = styled("img")({
  height: "400px",
  width: "400px",
});

const TextWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <ImageWrapper src={Image} alt="welcome" />
      <TextWrapper>
        <Typography variant="h4" sx={{ color: "var(--black-color)" }}>
          Start a conversation by clicking on any discussion !
        </Typography>
        <Typography variant="h6" sx={{ color: "var(--darken-black-color)" }}>
          You can also invite your coworkers by clicking on the Invite Colleague
          button in the top left menu
        </Typography>
      </TextWrapper>
    </Wrapper>
  );
};

export default WelcomeMessage;
