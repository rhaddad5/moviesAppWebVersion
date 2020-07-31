import React, {useState, useEffect} from "react";
import {Form, Button} from "react-bootstrap";
import {signup} from "../../API/Signup";
import "../../styles/loginAndSignup.css";
import {CloudinaryContext, Image} from "cloudinary-react";
import {fetchPhotos, openUploadWidget} from "../../CloudinaryService";
import {useHistory} from "react-router-dom";
import {Alert} from "react-bootstrap";

export default function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [images, setImages] = useState([]);
  const history = useHistory();

  const handleChangeUsername = (event) => {
    if(event.target.value.length < 3) {
      setErrorMessage("Please enter a username");
    } else {
      setErrorMessage(false);
    }
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(event.target.value)) {
      setEmail(event.target.value);
      setErrorMessage(false);
    } else {
      setErrorMessage("Please enter a valid email");
    }
  };

  const handleChangePassword = (event) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(regex.test(event.target.value)) {
      setPassword(event.target.value);
      setErrorMessage(false);
    } else {
      setErrorMessage("Your password must contain at least 8 characters with 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character");
    }
  };

  const createUser = () => {
    signup(username, email, password)
    .then(data => {
      console.log(data.response)
      if(data.response) {
        setErrorMessage(data.response.data)
      } else {
        history.push("/login")
      }
    })
  };

  const startUpload = (tag) => {
    const uploadOptions = {
        cloudName: "duoagxeqy",
        tags: [tag],
        uploadPreset: "achmm5wn"
    };

    openUploadWidget(uploadOptions, (error, photos) => {
        if (!error) {
          if(photos.event === "success"){
            setImages([...images, photos.info.url])
          }
        } else {
          console.log(error);
        }
      })
  };

  useEffect( () => {
    fetchPhotos("image", setImages);
  }, [])

  return(
    <CloudinaryContext cloudName="duoagxeqy">
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" className="inputLogin" placeholder="Enter username" onChange={handleChangeUsername}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" className="inputLogin" placeholder="Enter email" onChange={handleChangeEmail}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" className="inputLogin" placeholder="Password" onChange={handleChangePassword}/>
        </Form.Group>
        <Button onClick={() => startUpload()} className="uploadPhoto">📷 Upload a photo</Button>
        <br></br>
        <section>
          {images.map(i => <Image
                 key={i}
                 publicId={i}
                 fetch-format="auto"
                 quality="auto"
               />)}
        </section>
        <br></br>
        <Button variant="danger"className="loginSignupBtn" onClick={() => {createUser()}}>Submit</Button>
      </Form>
      {errorMessage ?
        (<Alert variant="danger" className="formAlert">
          {errorMessage}
        </Alert>)
        : ""
      }
    </CloudinaryContext>
  )
}
