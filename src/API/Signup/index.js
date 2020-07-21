import axios from "axios";

export const signup = (username, email, password, imageUrl) => {
  axios.post("http://localhost:8000/users/signup", {username: username, email: email, password: password, imageUrl: imageUrl})
  .then((res) => {
    if(res.data === "Email address already used") {
      return res.data;
    }
    console.log("REPONSE SIGNUP POST", res)
  })
  .catch((e) => console.log("ERREUR SIGNUP POST", e))
};
