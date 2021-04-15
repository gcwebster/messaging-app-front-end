import { SAVE_MESSAGES } from "./message.types";

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

    default:
      return state;
  }
};

export default reducer;
