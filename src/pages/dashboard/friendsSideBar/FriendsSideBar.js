import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./friendsList/FriendsList";
import PendingInvitationsList from "./pendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "300px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "var(--light-gray-color)",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Discussions" withBorder />
      <FriendsList />
      <FriendsTitle title="Invitations" withBorder />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
