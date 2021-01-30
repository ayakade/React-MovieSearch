import React from 'react';
import { useState } from "react";
// useState ref: https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#:~:text=useState%20is%20a%20Hook%20that,function%20to%20update%20this%20value.&text=Declaring%20state%20in%20React,React%20Hooks%3A%20Update%20state
import { useEffect } from "react";
// useEffect ref: https://dmitripavlutin.com/react-useeffect-explanation/#:~:text=useEffect()%20executes%20the%20callback,dependencies%20have%20changed%20between%20renderings.

// import compornents
import Header from './Header';
import Search from './Search';
import Movie from './Movie';

// API
const api_url = "http://www.omdbapi.com/?s=pretty&apikey=fe90ea07";

const App = () => {
  const [movies, setMovies] = useState([]);

  // change movies display based on search word (default search word is "pretty")
  useEffect(() => {
    fetch(api_url)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
      });
  }, []);

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
