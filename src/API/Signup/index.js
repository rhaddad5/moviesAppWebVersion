import axios from "axios";

export const signup = (username, email, password, imageUrl) => {
  return axios.post("http://localhost:8000/users/signup", {username: username, email: email, password: password, imageUrl: imageUrl})
  .then((res) => {
    console.log("REPONSE SIGNUP POST", res);
    return res;
  })
  .catch((e) => {
    console.log("ERREUR SIGNUP POST", e);
    return e;
  })
};
