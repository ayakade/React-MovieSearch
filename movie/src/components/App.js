import React from 'react';
import { useState } from "react";
// useState ref: https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#:~:text=useState%20is%20a%20Hook%20that,function%20to%20update%20this%20value.&text=Declaring%20state%20in%20React,React%20Hooks%3A%20Update%20state

// import compornents
import Header from './Header';
import Search from './Search';
import Movie from './Movie';

// API
const api_url = "http://www.omdbapi.com/?s=pretty&apikey=fe90ea07";

const App = () => {
  const [movies, setMovies] = useState([]);

  // attach movie data from API (movies search word "pretty")
  fetch(api_url)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse);
      setMovies(jsonResponse.Search);
    });

  // search movie from search word
  const search = (searchMovie) => {
    fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=fe90ea07`)
    .then(response => response.json())
    .then(result => setMovies(result.Search))
  };
  
  return (
    <div className="App">
      <Header text="Movie Library"/>
      <Search search={search} />
      <div className="movies">
        {
          movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  );
};

export default App;
