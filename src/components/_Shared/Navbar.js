import React, {useEffect} from "react";
import "../../styles/navbar.css";
import {Navbar, Nav} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {checkIfUserLoggedIn, checkIfUserLoggedOut} from "../../redux/actions";

export default function NavbarMovie() {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.loggedInReducer);

  console.log(isLoggedIn);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if(token) {
      dispatch(checkIfUserLoggedIn(token));
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("imageUrl");
    sessionStorage.removeItem("movies");
    sessionStorage.removeItem("favMovies");
    dispatch(checkIfUserLoggedOut());
    document.location.reload(true);
  }

  const userAvatar = sessionStorage.getItem("imageUrl");

  return(
    <Navbar bg="light">
      {isLoggedIn[0] ?
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
