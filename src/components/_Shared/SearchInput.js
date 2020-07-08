import React, {useState} from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import {moviesListSearch} from "../../API/MovieSearch";
import {useDispatch} from "react-redux";
import "../../styles/searchInput.css";

export default function SearchInput() {

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const dispatch = useDispatch();

  const searchMovies = () => {
    moviesListSearch(query, dispatch);
  };

  return(
    <div>
      <InputGroup className="searchMovies mb-3">
          <FormControl
            placeholder="Look for a movie"
            aria-label="Look for a movie"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={searchMovies}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
    </div>
  )
}
