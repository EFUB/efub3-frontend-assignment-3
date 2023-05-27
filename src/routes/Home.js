import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

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
        <Loading>Loading...</Loading>
      ) : (
        <HMain>
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
        </HMain>
      )}
    </div>
  );
};

export default Home;

const HMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  /* 줄넘김 처리 */
`;

const Loading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
