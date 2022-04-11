import React from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Chip, Divider, Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Please enter correct username/email/password";
};

const getFormValidMessage = () => {
  return "Press to Register";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register Now"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <Divider
        sx={{ maxHeight: "1px", backgroundColor: "white", marginTop: "10px" }}
        variant="middle"
      />
      <RedirectInfo
        text="Already a member? "
        redirectText="Login here"
        additionalStyles={{
          marginTop: "10px",
          textAlign: "center",
        }}
        redirectHandler={handlePushToLoginPage}
      />
    </React.Fragment>
  );
};

export default RegisterPageFooter;
