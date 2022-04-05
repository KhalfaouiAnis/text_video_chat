import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/CloseOutlined";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {};

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
