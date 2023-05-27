import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=download_count"
    );
    setMovies(response.data.data.movies);
    console.log(response.data.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Wrapper theme={theme}>
      <Container>
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              cover={movie.medium_cover_image}
              title={movie.title}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Home;
