import NavBar from "../common/NavBar";
import AllMovies from "./AllMovies";
import styled from "styled-components";
import { useSelector } from "react-redux";

// 모든 영화 리스트
const Movies = ({ movies }) => {
  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);

  return (
    <MovieContainer bgcolor={bgcolor}>
      <NavBar />
      <Title color={color}>All Movies</Title>
      <AllMovies movies={movies} />
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor};
  padding-bottom: 100px;
`;

const Title = styled.h1`
  margin-left: 4%;
  padding-top: 7%;
  color: ${(props) => props.color};
`;

export default Movies;
