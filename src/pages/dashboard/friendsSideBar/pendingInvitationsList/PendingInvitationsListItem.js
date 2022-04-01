import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "../../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import TextFormatter from "../../../../shared/components/TextFormatter";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "42px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Avatar username={username} />
        <Typography
          sx={{
            marginLeft: "7px",
            fontWeight: 700,
            color: "#8e9297",
            flexGrow: 1,
          }}
          variant="subtitle1"
        >
          <TextFormatter text={username} len={18} />
        </Typography>
        <InvitationDecisionButtons
          disabled={buttonsDisabled}
          acceptInvitationHandler={handleAcceptInvitation}
          rejectInvitationHandler={handleRejectInvitation}
        />
      </Box>
    </div>
  );
};

export default PendingInvitationsListItem;
