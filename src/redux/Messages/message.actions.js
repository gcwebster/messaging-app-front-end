import { SAVE_MESSAGES } from "./message.types";

export const saveMessages = (payload) => {
  console.log("payload is: ", payload);
  return {
    type: SAVE_MESSAGES,
    payload,
  };
};
