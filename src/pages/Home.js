import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sor_by=year"
    );
    setMovies(response.data.data.movies);
    console.log(response.data.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            cover={movie.medium_cover_image}
            title={movie.title}
          />
        );
      })}
    </div>
  );
};

export default Home;
