import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const ChosenOptionLabel = ({ color = "white" }) => {
  const name = useSelector(({ chat }) => chat.chosenChatDetails?.name);
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color,
        fontWeight: "bold",
      }}
    >
      {`${name ? `Chat with ${name}` : ""}`}
    </Typography>
  );
};

export default ChosenOptionLabel;
