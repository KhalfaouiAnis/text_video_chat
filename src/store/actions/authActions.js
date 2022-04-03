import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

export const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

export const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data, "error"));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      dispatch(
        openAlertMessage(`Welcome back ${userDetails.username}`, "info")
      );
      history.push("/dashboard");
    }
  };
};

export const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data, "error"));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(openAlertMessage("Account created !", "success"));
      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};
