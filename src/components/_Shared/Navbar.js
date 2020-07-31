import React, {useState, useEffect} from "react";
import "../../styles/navbar.css";
import {Navbar, Nav} from "react-bootstrap";

export default function NavbarMovie() {

  // let nav = null;

  const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
    if(sessionStorage.getItem("accessToken")) {
      // console.log("coucou");
      setIsLoggedIn(true);
      return;
    }
    // console.log( "pas coucou");
    setIsLoggedIn(false);
    return;
  }, [sessionStorage.getItem("accessToken")]);

  // useEffect(() => {
  //   if(sessionStorage.getItem("accessToken")) {
  //     console.log("coucou");
  //     setIsLoggedIn(true);
  //   }
  // }, [isLoggedIn]);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("imageUrl");
    sessionStorage.removeItem("movies");
    sessionStorage.removeItem("favMovies");
    document.location.reload(true);
  }

  const userAvatar = sessionStorage.getItem("imageUrl");

  return(
    <Navbar bg="light">
      {isLoggedIn ?
          (<Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mymovies">My movies</Nav.Link>
            <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
            <Nav.Link href="#pricing">
              <img className="avatar dropdown-toggle" src={userAvatar} alt="User avatar"/>
            </Nav.Link>
          </Nav>) :
          (<Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>)}
    </Navbar>
  )
}
