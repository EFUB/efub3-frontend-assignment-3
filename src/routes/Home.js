import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json`);

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);

    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    dispatch({ type: "DarkMode" });
  };

  return (
    <div className="Home">
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <div>
          <AppContainer isDarkMode={isDarkMode}>
            <ButtonContainer>
              <Button onClick={handleDarkMode}>
                {isDarkMode ? "WhiteMode" : "DarkMode"}
              </Button>
            </ButtonContainer>
            <HMain>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  medium_cover_image={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  genres={movie.genres}
                  summary={movie.summary}
                />
              ))}
            </HMain>
          </AppContainer>
        </div>
      )}
    </div>
  );
};

export default Home;

const HMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  /* 줄넘김 처리 */
`;

const Loading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#000" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
`;

const Button = styled.button`
  /* display: flex;
  flex-direction: row-reverse; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
  margin-top: 10px;
  margin-right: 15px;
  border-color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
