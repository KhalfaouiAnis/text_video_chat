import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import AppBar from "./appBar/AppBar";
import SideBar from "./sideBar/SideBar";
import FriendsSideBar from "./friendsSideBar/FriendsSideBar";
import Messenger from "./messenger/Messenger";
import { logout } from "../../shared/utils/auth";
import { setUserDetails } from "../../store/actions/authActions";
import { connectWithSocktServer } from "../../RTC/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      dispatch(setUserDetails(JSON.parse(userDetails)));
      connectWithSocktServer(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
