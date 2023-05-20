import MovieItem from "./MovieItem";
import styled from "styled-components";

const MovieList = ({ movies }) => {
  // popular movie(기준 : 평점 7.5 초과) : 평점 순으로 정렬
  const popularMovies = movies
    .filter((movie) => movie.rating > 7.5)
    .sort((a, b) => b.rating - a.rating);
  // 최신 영화 : 2020년도 ~
  const recentMovies = movies.filter((movie) => movie.year >= 2020);
  // genre : Drama
  const dramaMovies = movies.filter((movie) => movie.genres.includes("Drama"));
  // genre : Comedy
  const comedyMovies = movies.filter((movie) =>
    movie.genres.includes("Comedy")
  );
  // genre : Documentary
  const DocMovies = movies.filter((movie) =>
    movie.genres.includes("Documentary")
  );
  console.log(popularMovies);

  return (
    <MovieContainer>
      <Title>Popular on Netflix</Title>
      {popularMovies.map((movie, rank) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
          rank={rank + 1}
        />
      ))}
      <Title>Recent Movies</Title>
      {recentMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
      <Title>Documentary</Title>
      {DocMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
      <Title>Drama</Title>
      {dramaMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
      <Title>Comedy</Title>
      {comedyMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  margin-left: 3rem;
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-top: 30px;
`;

export default MovieList;
