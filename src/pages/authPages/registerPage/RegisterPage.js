import React, { useState, useEffect } from "react";
import { register } from "../../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import { validateRegisterForm } from "../../../shared/utils/validators";

import { Typography } from "@mui/material";
import AuthBox from "../../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = () => {
    const userDetails = { username, mail, password };
    dispatch(register(userDetails, history));
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;
