import React, { Fragment } from "react";
import { Tooltip } from "@mui/material";

const TextFormatter = ({ text, len }) => {
  return (
    <Fragment>
      {text.length > len ? (
        <Tooltip title={text}>
          <span>{text.substring(0, len) + "..."}</span>
        </Tooltip>
      ) : (
        <span>{text}</span>
      )}
    </Fragment>
  );
};

export default TextFormatter;
