import React from "react";
import { useState } from "react";

const Search = (props) => {
    const [searchMovie, setSearchMovie] = useState("");
    
    // update value in input field
    const searchMovieTitle = (e) => {
        setSearchMovie(e.target.value);
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchMovie);
    }

    return (
        <form className="search">
            <h2>Find a movie</h2>
            <input
                value={searchMovie}
                onChange={searchMovieTitle}
                type="text"
                placeholder="type movie title"
            />
            <input 
                onClick={callSearchFunction} 
                type="submit" 
                value="Search" 
            />
        </form>
    );
}

export default Search;