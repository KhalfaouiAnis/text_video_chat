import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import FriendsTitle from "../FriendsTitle";

const MainContainer = styled("div")({
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  const { pendingFriendsInvitations } = useSelector(({ friends }) => friends);

  return (
    <MainContainer>
      {pendingFriendsInvitations.length < 1 ? (
        <FriendsTitle
          title="No pending invitations"
          color="black"
          bgColor="var(--light-gray-color)"
        />
      ) : (
        pendingFriendsInvitations.map((inv) => (
          <PendingInvitationsListItem
            key={inv._id}
            id={inv._id}
            username={inv.senderId.username}
            mail={inv.senderId.mail}
          />
        ))
      )}
    </MainContainer>
  );
};

export default PendingInvitationsList;
