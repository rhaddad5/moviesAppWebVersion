import axios from "axios";

export const signup = (username, email, password, imageUrl) => {
  const headers = {"Access-Control-Allow-Origin": "*"};
  return axios.post("https://movies-rest-api-web.herokuapp.com/users/signup", {username: username, email: email, password: password, imageUrl: imageUrl}, {headers: headers})
  .then((res) => {
    console.log("REPONSE SIGNUP POST", res);
    return res;
  })
  .catch((e) => {
    console.log("ERREUR SIGNUP POST", e);
    return e;
  })
};
