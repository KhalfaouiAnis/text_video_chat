import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [iseScreenSharingActive, setIseScreenSharingActive] = useState(false);

  const handleScreenSharingToggle = () =>
    setIseScreenSharingActive(!iseScreenSharingActive);

  return (
    <IconButton onClick={handleScreenSharingToggle} style={{ color: "white" }}>
      {iseScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
