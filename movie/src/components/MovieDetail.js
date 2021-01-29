import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
// useParams returns an object of the params for the route rendered
// ref: https://reach.tech/router/api/useParams#:~:text=Returns%20an%20object%20of%20the,hook%2Dcompatible%20version%20of%20React.

// set default image
const default_image =
  "https://upload.wikimedia.org/wikipedia/en/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg";

const MovieDetail = () => {

    const [ movie, setMovie ] = useState([]);

    let { id } = useParams();
    const api_key = 'fe90ea07';

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${api_key}`)
    .then(response => response.json())
    .then(result => setMovie(result)) 

    const poster = movie.Poster === "N/A" ? default_image : movie.Poster; // if there's no image use default image

    return (
        <div className="movieDetail" key={movie.imdbID}>
            <img
            width="200"
            src={poster}
            alt={movie.Title}
            />
            <h2>{movie.Title}</h2>
            <table>
                <tr>
                    <th>IMDb Rate:</th>
                    <th>Year Rate:</th>
                    <th>Genre:</th>
                    <th>Released:</th>
                    <th>Runtime:</th>
                    <th>Director:</th>
                    <th>Actors:</th>
                </tr>
                <tr>
                    <td>{movie.imdbRating}</td>
                    <td>{movie.Year}</td>
                    <td>{movie.Genre}</td>
                    <td>{movie.Released}</td>
                    <td>{movie.Runtime}</td>
                    <td>{movie.Director}</td>
                    <td>{movie.Actors}</td>
                </tr>
            </table>
        </div>
    );
};
  
export default MovieDetail;