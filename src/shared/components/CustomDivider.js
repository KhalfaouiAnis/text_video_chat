import React from "react";
import { styled } from "@mui/system";
import { Divider } from "@mui/material";

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  minHeight: "12px",
  margin: "5px 0",
  borderTop: "1px solid var(--dark-blue-color)",
});

const CustomDivider = ({ showDivider }) => {
  if (showDivider) {
    return (
      <Wrapper>
        <Divider />
      </Wrapper>
    );
  } else return null;
};

export default CustomDivider;
