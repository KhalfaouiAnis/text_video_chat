import React from "react";
import { Typography } from "@mui/material";

const LoginHeader = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy that you're back with us
      </Typography>
    </React.Fragment>
  );
};

export default LoginHeader;
