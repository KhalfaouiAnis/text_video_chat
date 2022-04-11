import React from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Chip, Divider, Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Please provide correct email/password";
};

const getFormValidMessage = () => {
  return "Press to login";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const handlePushToRegisterPage = () => {
    history.push("/register");
  };

  return (
    <React.Fragment>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <Divider
        sx={{ maxHeight: "1px", backgroundColor: "white", marginTop: "10px" }}
        variant="middle"
      />
      <RedirectInfo
        text="Need an account ? "
        redirectText="Create an account"
        additionalStyles={{
          marginTop: "10px",
          textAlign: "center",
        }}
        redirectHandler={handlePushToRegisterPage}
      />
    </React.Fragment>
  );
};

export default LoginPageFooter;
