import NavBar from "./NavBar";
import AllMovies from "./AllMovies";
import styled from "styled-components";

// 모든 영화 리스트
const Movies = ({ movies }) => {
  return (
    <>
      <NavBar />
      <Title>All Movies</Title>
      <AllMovies movies={movies} />
    </>
  );
};

const Title = styled.h1`
  margin-left: 5%;
  margin-top: 8%;
`;

export default Movies;
