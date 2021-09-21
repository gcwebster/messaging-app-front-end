import axios from "axios";

export const signIn = async (
  email,
  password,
  setAuthenticated,
  setUser,
  setError,
  setEmailOrPasswordMissing
) => {
  if (email && password) {
    setEmailOrPasswordMissing(false);
    axios.post("http://localhost:8080/users", { email, password }).then(
      (res) => {
        const { data } = res;
        setAuthenticated(data.authenticated);
        setUser({
          email,
          name: data.user,
        });
        setError(data.error);
      },
      (err) => console.error("error in post call: ", err)
    );
  } else {
    setEmailOrPasswordMissing(true);
  }
};
