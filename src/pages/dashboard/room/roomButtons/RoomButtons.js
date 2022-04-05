import React from "react";
import { styled } from "@mui/system";
import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";

const MainWrapper = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderLeftRedius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = () => {
  return (
    <MainWrapper>
      <ScreenShareButton />
      <MicButton />
      <CloseRoomButton />
      <CameraButton />
    </MainWrapper>
  );
};

export default RoomButtons;
