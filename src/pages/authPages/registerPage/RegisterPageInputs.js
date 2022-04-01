import React from "react";
import InputWithLabel from "../../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <React.Fragment>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="email"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </React.Fragment>
  );
};

export default RegisterPageInputs;
