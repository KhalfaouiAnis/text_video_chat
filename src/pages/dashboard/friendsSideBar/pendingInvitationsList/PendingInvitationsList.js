import React from "react";
import { connect } from "react-redux";
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

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations.length < 1 ? (
        <FriendsTitle title="No pending invitations" color="white" />
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

const mapStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStateToProps)(PendingInvitationsList);
