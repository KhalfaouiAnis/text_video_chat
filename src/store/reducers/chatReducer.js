import { chatActions } from "../actions/chatActions";

const initialState = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.SET_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetails,
        chatType: action.chatType,
        messages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default reducer;
