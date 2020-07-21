import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {login} from "../../API/Login";
import {useHistory} from "react-router-dom";
import "../../styles/loginAndSignup.css";
import "../../styles/alerts.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = (event) => {
    event.preventDefault();
    login(email, password);
    history.push("/");
  };

  return(
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" className="inputLogin" placeholder="Enter email" onChange={handleChangeEmail} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" className="inputLogin" placeholder="Password" onChange={handleChangePassword}/>
        </Form.Group>
        <Button variant="danger" className="loginSignupBtn" type="submit" onClick={loginUser}>Login</Button>
      </Form>
  )
}
