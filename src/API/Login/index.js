import axios from "axios";
import {checkIfUserLoggedIn} from "../../redux/actions";

export const login = (email, password, dispatch) => {
  const headers = {"Access-Control-Allow-Origin": "*"};
  return axios.post("https://movies-rest-api-web.herokuapp.com/users/login", {email: email, password: password}, {headers: headers})
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
