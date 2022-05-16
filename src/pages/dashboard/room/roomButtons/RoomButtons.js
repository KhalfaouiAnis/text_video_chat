import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const {
    localStream,
    screenSharingStream,
    isScreenSharingActive,
    isUserJoinedWithOnlyAudio,
  } = useSelector((s) => s.room);
  return (
    <MainWrapper>
      {!isUserJoinedWithOnlyAudio && (
        <ScreenShareButton
          localStream={localStream}
          screenSharingStream={screenSharingStream}
          isScreenSharingActive={isScreenSharingActive}
        />
      )}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainWrapper>
  );
};

export default RoomButtons;
