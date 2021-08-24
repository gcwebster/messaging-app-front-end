import axios from "axios";

export const register = async (values) => {
  axios
    .post("http://localhost:8080/users/register", {
      values,
    })
    .then(
      (res) => {
        const { data } = res;
        console.log("response: ", data);
      },
      (err) => console.error("error in post call: ", err)
    );
};
