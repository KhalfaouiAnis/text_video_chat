import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Autocomplete,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { validateMail } from "../../../shared/utils/validators";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import { sendFriendInvitation } from "../../../store/actions/friendsActions";
import { search } from "../../../api";
import useDebounce from "../../../shared/customHooks/useDebounce";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const debouncedValue = useDebounce(inputValue, 500);

  const handleSendInvitation = () => {
    dispatch(
      sendFriendInvitation(
        {
          targetMailAddress: inputValue,
        },
        closeDialogHandler
      )
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setInputValue("");
  };

  const handleSearch = async () => {
    if (!debouncedValue) return;
    try {
      const {
        data: { users },
      } = await search({ mail: debouncedValue });
      setOptions(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      handleSearch();
    }
  }, [debouncedValue]);

  useEffect(() => {
    setIsFormValid(validateMail(inputValue));
  }, [inputValue, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>
          <Typography>Invite Colleagues</Typography>
        </DialogTitle>
        <DialogContent sx={{ height: "300px" }}>
          <Stack sx={{ marginTop: "8px", height: "200px" }}>
            <Autocomplete
              id="select-invite-id"
              loading={loading}
              loadingText={<CircularProgress />}
              options={options}
              noOptionsText="No results found"
              getOptionLabel={(option) => `${option.mail || ""}`}
              isOptionEqualToValue={(option, value) => {
                return option.mail === value.mail;
              }}
              filterOptions={(x) => x}
              onChange={(e, newValue) => setValue(newValue)}
              value={value}
              onInputChange={(event, newInputValue) => {
                setLoading(true);
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Email" />
              )}
            />
          </Stack>
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
