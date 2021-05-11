import { SAVE_MESSAGES, SET_USER } from "./message.types";

const INITIAL_STATE = {
  messages: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
