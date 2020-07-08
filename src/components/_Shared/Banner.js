import React from "react";
import "../../styles/banner.css";
import SearchInput from "./SearchInput";

export default function Banner() {
  return(
    <div className="banner">
      <div className="container">
        <h1>Your own movie database</h1>
        <p>Find all your favourite movies and save them not to forget them ever again</p>
        <SearchInput/>
      </div>
    </div>
  )
}
