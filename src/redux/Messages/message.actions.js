import { SAVE_MESSAGES, SET_USER } from "./message.types";

export const saveMessages = (payload) => {
  console.log("payload is: ", payload);
  return {
    type: SAVE_MESSAGES,
    payload,
  };
};

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};
