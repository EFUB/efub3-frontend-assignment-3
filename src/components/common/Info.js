import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// 영화 개별 정보
const Info = ({ movies }) => {
  const bgcolor = useSelector((state) => state.backgroundColor);

  const params = useParams();
  const movieId = params.id;
  const navigate = useNavigate();

  // find 메소드를 사용하여 movieId와 일치하는 영화를 찾음
  const movie = movies.find((movie) => movie.id.toString() === movieId);

  if (!movie) {
    // 일치하는 영화가 없을 경우, 이에 대한 처리.
    return <div>Movie not found</div>;
  }

  // 화살표 아이콘 누르면 이전 페이지로 이동
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container bgcolor={bgcolor}>
      <ArrowIcon onClick={handleClick} />
      <BgImg src={movie.background_image} alt={movie.title} />
      <MovieContainer>
        <Img src={movie.medium_cover_image} alt={movie.title} />
        <InfoContainer>
          <Title>{movie.title}</Title>
          <List>Year : {movie.year}</List>
          <List>Genre: {movie.genres}</List>
          <List>Rating : {movie.rating}/10</List>
          <Summary>{movie.summary.slice(0, 434)}</Summary>
        </InfoContainer>
      </MovieContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  height: 100vh;
`;

const BgImg = styled.img`
  position: absolute;
  z-index: 0;
  filter: blur(7px);
  margin-top: 8%;
  width: 80%;
  height: 70%;
`;

const ArrowIcon = styled(Arrow)`
  width: 30px;
  height: 30px;
  margin-left: 7%;
  margin-top: 30px;
  padding: 10px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
  opacity: 70%;
`;

const Img = styled.img`
  border-radius: 10px;
  width: 24%;
  height: 24%;
`;

const MovieContainer = styled.div`
  margin-left: 16%;
  margin-top: 8%;
  display: flex;
  align-items: flex-start;
  position: absolute;
  z-index: 1;
  width: 80%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-left: 5%;
  color: white;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-top: 0px;
`;

const List = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Summary = styled.p`
  font-size: 18px;
`;

export default Info;
