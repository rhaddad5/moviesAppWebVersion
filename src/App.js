import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import MoviesContainer from "./components/Movies/MoviesContainer";
import MovieDetails from "./components/Movies/MovieDetails";
import FavouriteMovies from "./components/Movies/FavouriteMovies";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavbarMovie from "./components/_Shared/Navbar";
import Footer from "./components/_Shared/Footer";

function App() {
  return (
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
  );
}

export default App;
