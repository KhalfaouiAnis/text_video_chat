import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/actions/authActions";
import { useHistory } from "react-router-dom";
import { validateLoginForm } from "../../../shared/utils/validators";

import AuthBox from "../../../shared/components/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = { mail, password };
    dispatch(login(userDetails, history));
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
