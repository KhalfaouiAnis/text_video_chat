import React from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import CloseFullScreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainWrapper = styled("div")({
  position: "absolute",
  bottom: "0px",
  right: "10px",
});

const ResizeRoomButtom = ({ isRoomMinimized, HandelRoomResize }) => {
  return (
    <MainWrapper>
      <IconButton style={{ color: "white" }} onClick={HandelRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullScreenIcon />}
      </IconButton>
    </MainWrapper>
  );
};

export default ResizeRoomButtom;
