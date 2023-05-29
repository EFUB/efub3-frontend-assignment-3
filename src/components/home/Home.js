import Cover from "./Cover";
import MovieList from "./MovieList";
import NavBar from "../common/NavBar";

const Home = ({ movies }) => {
  return (
    <>
      <NavBar />
      <Cover movies={movies[4]} style={{ height: "10rem" }} />
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
