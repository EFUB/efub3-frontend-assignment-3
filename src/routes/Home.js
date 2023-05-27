import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json`);

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);

    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="Home">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="home">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
