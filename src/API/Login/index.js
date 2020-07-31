import axios from "axios";

export const login = (email, password) => {
  return axios.post("http://localhost:8000/users/login", {email: email, password: password})
  .then((res) => {
    sessionStorage.setItem('accessToken', res.data.accessToken);
    sessionStorage.setItem('imageUrl', res.data.imageUrl);
    return res;
  })
  .catch((e) => {
    console.log("ERREUR LOGIN POST", e)
    return e;
  })
};
