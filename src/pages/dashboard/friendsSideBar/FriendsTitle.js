import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const FriendsTitleContainer = styled("div")({
  width: "100%",
  marginTop: "5px",
  padding: "8px 0",
});

const FriendsTitle = ({
  title,
  color = "white",
  bgColor = "var(--lighten-black-color)",
  withBorder,
}) => {
  return (
    <FriendsTitleContainer
      style={
        withBorder
          ? {
              borderTopLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              backgroundColor: bgColor,
            }
          : { backgroundColor: bgColor }
      }
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          color: color,
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>
    </FriendsTitleContainer>
  );
};

export default FriendsTitle;
