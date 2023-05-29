import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieTemplate from "./MovieTemplate.js";
import { useSelector } from "react-redux";

//영화 api의 데이터를 movies에 저장하는 컴포넌트
function Movie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //store로 부터 isDarkMode를 가져와서 사용
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating" //영화를 평점이 높은 순서로 정렬
      );
      //순위를 추가
      const moviesWithRank = response.data.data.movies.map((movie, index) => ({
        ...movie,
        rank: index + 1,
      }));
      setMovies(moviesWithRank);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => {
          return (
            <MovieTemplate
              isDarkMode={isDarkMode}
              key={movie.id}
              rank={movie.rank}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              rating={movie.rating}
              genres={movie.genres}
            />
          );
        })
      )}
    </div>
  );
}

export default Movie;
