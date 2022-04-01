import React from "react";
import { styled } from "@mui/system";
import { generateColor } from "../utils/styleUtils";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }) => {
  const str = username.split(" ");
  return (
    <AvatarPreview
      style={
        large
          ? {
              height: "80px",
              width: "80px",
              backgroundColor: generateColor(username),
            }
          : {
              backgroundColor: generateColor(username),
            }
      }
    >
      {str.length > 1 ? str[0][0] + str[1][0] : username.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;
