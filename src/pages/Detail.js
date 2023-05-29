import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Detail = () => {
  const theme = useSelector((state) => state);

  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovie = async () => {
    const response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    setMovie(response.data.data.movie);
    console.log(response.data.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {movie ? (
        <Container theme={theme}>
          <Image src={movie.medium_cover_image} alt="" />
          <Info>
            <Title>{movie.title}</Title>
            <Year>{movie.year}</Year>
            <Genres>
              {movie.genres.map((genre, index) => {
                return <Genre key={index}>{genre}</Genre>;
              })}
            </Genres>
            <Description>{movie.description_intro}</Description>
          </Info>
        </Container>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const Image = styled.img`
  margin: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 50px;
`;

const Year = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
`;

const Genres = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Genre = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;

const Description = styled.div`
  max-width: 500px;
  margin-top: 20px;
`;

export default Detail;
