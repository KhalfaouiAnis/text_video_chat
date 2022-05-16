import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

import * as webRTCHandler from "../../../../RTC/webRTCHandler";
import { setScreenSharingStream } from "../../../../store/actions/roomActions";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  isScreenSharingActive,
}) => {
  const dispatch = useDispatch();

  const handleScreenSharingToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error occured wehn trying to access screen shari,g stream"
        );
      }
      if (stream) {
        dispatch(setScreenSharingStream(stream));
        webRTCHandler.switchOutgoingTracks(stream);
      } else {
        webRTCHandler.switchOutgoingTracks(localStream);
        screenSharingStream.getTracks().forEach((t) => t.stop());
        dispatch(setScreenSharingStream(null));
      }
    }
  };

  return (
    <IconButton onClick={handleScreenSharingToggle} style={{ color: "white" }}>
      {iseScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
