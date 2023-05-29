import MovieItem from "../movies/MovieItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

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

  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);

  return (
    <MovieContainer bgcolor={bgcolor}>
      <Title color={color}>Popular on Netflix</Title>
      {popularMovies.map((movie, rank) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
          rank={rank + 1}
        />
      ))}
      <Title color={color}>Recent Movies</Title>
      {recentMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
      <Title color={color}>Documentary</Title>
      {DocMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
      <Title color={color}>Drama</Title>
      {dramaMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
        />
      ))}
      <Title color={color}>Comedy</Title>
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
  padding-left: 3rem;
  padding-bottom: 50px;
  background-color: ${(props) => props.bgcolor};
  position: absolute;
  z-index: -1;
  right: 0px;
  left: 0px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-top: 70px;
  color: ${(props) => props.color};
`;

export default MovieList;
