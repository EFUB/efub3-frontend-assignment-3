import MovieItem from "../movies/MovieItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PopularMovies = ({ movies }) => {
  // popular movies : 평점 순으로 10개
  const popularMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 10);

  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);

  return (
    <MovieContainer bgcolor={bgcolor}>
      <Title color={color}>Popular Movies</Title>
      {popularMovies.map((movie, rank) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          cvImg={movie.medium_cover_image}
          rank={rank + 1}
        />
      ))}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  padding-left: 3rem;
  position: absolute;
  background-color: ${(props) => props.bgcolor};
  padding-bottom: 100px;
`;

const Title = styled.h1`
  padding-top: 7%;
  color: ${(props) => props.color};
`;

export default PopularMovies;
