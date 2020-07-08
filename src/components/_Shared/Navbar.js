import React, {useReducer, useEffect} from "react";
import "../../styles/navbar.css";
import {Navbar, Nav} from "react-bootstrap";

export default function NavbarMovie() {

  const token = sessionStorage.getItem("accessToken");
  let nav = null;

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    document.location.reload(true);
  }

  const userAvatar = sessionStorage.getItem("imageUrl");

  token ? nav =
          (<Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mymovies">My movies</Nav.Link>
            <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
            <Nav.Link href="#pricing">
              <img className="avatar dropdown-toggle" src={userAvatar} alt="User avatar"/>
            </Nav.Link>
          </Nav>) : nav =
          (<Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>)

  return(
    <Navbar bg="light">
      {nav}
    </Navbar>
  )
}
