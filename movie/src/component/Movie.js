import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieTemplate from "./MovieTemplate.js";
import PropTypes from "prop-types";

//영화 api의 데이터를 movies에 저장하는 컴포넌트
function Movie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
      setMovies(response.data.data.movies); //배열 형태의 데이터를 얻음
      setIsLoading(false); //로딩이 완료됐다고 세팅
    } catch (e) {
      console.log(e);
    }
  };

  //페이지가 처음 로드될 때만 데이터를 받아오도록 useEffect 사용
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
              key={movie.id}
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

//넘겨받은 데이터 타입 검사
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
