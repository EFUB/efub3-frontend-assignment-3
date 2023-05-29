import MovieItem from "./MovieItem";
import styled from "styled-components";

const AllMovies = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          summary={movie.summary}
          bgImg={movie.background_image}
          cvImg={movie.medium_cover_image}
        />
      ))}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  margin-left: 3rem;
  margin-top: 2%;
`;

export default AllMovies;
