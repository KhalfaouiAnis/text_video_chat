import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { validateMail } from "../../../shared/utils/validators";
import InputWithLabel from "../../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import { sendFriendInvitation } from "../../../store/actions/friendsActions";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  const handleSendInvitation = () => {
    dispatch(
      sendFriendInvitation(
        {
          targetMailAddress: mail,
        },
        closeDialogHandler
      )
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Email address</Typography>
          </DialogContentText>
          <InputWithLabel
            label="Email"
            type="email"
            value={mail}
            setValue={setMail}
            placeholder="Email address..."
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
