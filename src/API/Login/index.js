import axios from "axios";
import {checkIfUserLoggedIn} from "../../redux/actions";

export const login = (email, password, dispatch) => {
  return axios.post("https://movies-rest-api-web.herokuapp.com/users/login", {email: email, password: password})
  .then((res) => {
    sessionStorage.setItem('accessToken', res.data.accessToken);
    sessionStorage.setItem('imageUrl', res.data.imageUrl);
    dispatch(checkIfUserLoggedIn(res.data.accessToken))
    return res;
  })
  .catch((e) => {
    console.log("ERREUR LOGIN POST", e)
    return e;
  })
};
