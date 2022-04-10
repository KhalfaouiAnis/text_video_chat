import React, { useState } from "react";
import InviteIcon from "@mui/icons-material/AddCircleRounded";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const customStyles = {
  marginTop: "5px",
  width: "98%",
  height: "38px",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={customStyles}
        label="Invite Colleague"
        Icon={InviteIcon}
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
