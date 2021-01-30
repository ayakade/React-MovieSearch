import React from "react";
import { Link } from "react-router-dom";

// set default image
const default_image =
  "https://upload.wikimedia.org/wikipedia/en/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg";

const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? default_image : movie.Poster; // if there's no image use default image
    
    return (
        <div className="movie" key={movie.imdbID}>
            <Link to={"/movie/"+movie.imdbID} >
                <div className="image"> 
                    <img
                        width="200"
                        src={poster}
                        alt={movie.Title}
                    />
                </div>
                <h2>{movie.Title}</h2>
            </Link>
        </div>
    );
};

export default Movie;