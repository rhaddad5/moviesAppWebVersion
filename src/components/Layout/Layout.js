import React from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import MoviesContainer from "../Movies/MoviesContainer";
import MovieDetails from "../Movies/MovieDetails";
import FavouriteMovies from "../Movies/FavouriteMovies";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavbarMovie from "../_Shared/Navbar";
import Footer from "../_Shared/Footer";

export default function Layout() {
  return(
    <Router>
      <div className="App">
        <NavbarMovie/>
        <Switch>
          <Route exact path="/" component={MoviesContainer}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/mymovies" component={FavouriteMovies}/>
          <Route exact path="/:id" component={MovieDetails}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}
