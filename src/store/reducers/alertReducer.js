import alertActions from "../actions/alertActions";

const initialState = {
  showAlertMessage: false,
  alertMessageContent: null,
  alertMessageType: "info",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
        alertMessageType: action.alertType,
      };

    case alertActions.CLOSE_ALERT_MESSAGE:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
