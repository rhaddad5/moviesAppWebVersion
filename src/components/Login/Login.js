import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {login} from "../../API/Login";
import {useHistory} from "react-router-dom";
import "../../styles/loginAndSignup.css";
import "../../styles/alerts.css";
import {Alert} from "react-bootstrap";

export default function Login({location}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = () => {
    login(email, password)
    .then(data => {
      console.log(data.response)
      if(data.response) {
        setErrorMessage(data.response.data)
      } else {
        history.push("/")
      }
    })
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
        <Button variant="danger" className="loginSignupBtn" onClick={loginUser}>Login</Button>
        {errorMessage ?
          (<Alert variant="danger" className="formAlert">
            {errorMessage}
          </Alert>)
          : ""
        }
      </Form>
  )
}
