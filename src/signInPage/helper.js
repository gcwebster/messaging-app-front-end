import axios from "axios";

export const signIn = async (
  email,
  password,
  setAuthenticated,
  setUser,
  setError
) => {
  axios.post("http://localhost:8080/users", { email, password }).then(
    (res) => {
      const { data } = res;
      setAuthenticated(data.authenticated);
      setUser(data.user);
      setError(data.error);
    },
    (err) => console.error("error in post call: ", err)
  );
};

export const register = async (
  email,
  password,
  setAuthenticated,
  setUser,
  setError
) => {
  axios
    .post("http://localhost:8080/users/register", {
      email,
      password,
    })
    .then(
      (res) => {
        const { data } = res;
        setAuthenticated(data.authenticated);
        setUser(data.user);
        setError(res.data.error);
      },
      (err) => console.error("error in post call: ", err)
    );
};
