import MovieItem from "./MovieItem";
import styled from "styled-components";

const PopularMovies = ({ movies }) => {
  // popular movies : 평점 순으로 10개
  const popularMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <MovieContainer>
      <Title>Popular Movies</Title>
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

const Title = styled.h1`
  margin-top: 8%;
`;
const MovieContainer = styled.div`
  margin-left: 3rem;
  margin-top: 4%;
`;

export default PopularMovies;
