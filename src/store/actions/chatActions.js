export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: "CHAT.SET_CHOSEN_CHAT_DETAILS",
  SET_MESSAGES: "CHAT.SET_MESSAGES",
  SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE",
  SET_IS_LOADING: "CHAT.SET_IS_LOADING",
};

export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (details, chatType) =>
      dispatch(setChosenChatDetails(details, chatType)),
  };
};

export const setChosenChatDetails = (chatDetails, type) => {
  return {
    type: chatActions.SET_CHOSEN_CHAT_DETAILS,
    chatDetails,
    chatType: type,
  };
};

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages,
  };
};

export const setIsLoading = (loading) => {
  return {
    type: chatActions.SET_IS_LOADING,
    loading,
  };
};
