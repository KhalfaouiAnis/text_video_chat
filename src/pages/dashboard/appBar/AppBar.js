import React from "react";
import { styled } from "@mui/system";
// import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import AccountMenu from "../../../shared/components/Menu";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid var(--white-color)",
  backgroundColor: "var(--darken-blue-color)",
  width: "calc(100% - 400px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 14px",
});

const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      <AccountMenu />
      {/* <DropdownMenu /> */}
    </MainContainer>
  );
};

export default AppBar;
