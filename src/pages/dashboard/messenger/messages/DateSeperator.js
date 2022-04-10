import React from "react";
import { styled } from "@mui/system";

const Seperator = styled("div")({
  width: "100%",
  backgroundColor: "#b9bbbe",
  height: "1px",
  position: "relative",
  marginTop: "20px",
  marginBottom: "10px",
});

const DateLabel = styled("span")({
  backgroundColor: "var(--placeholder-color)",
  borderRadius: "5px",
  position: "absolute",
  left: "45%",
  top: "-10px",
  color: "var(--darken-gray-color)",
  padding: "0 5px",
  fontSize: "14px",
});

const DateSeperator = ({ date }) => {
  return (
    <Seperator>
      <DateLabel>{date}</DateLabel>
    </Seperator>
  );
};

export default DateSeperator;
