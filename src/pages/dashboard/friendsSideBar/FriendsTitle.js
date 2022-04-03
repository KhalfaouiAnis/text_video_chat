import React from "react";
import Typography from "@mui/material/Typography";

const FriendsTitle = ({ title, color = "#8e9297" }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: color,
        fontSize: "14px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
