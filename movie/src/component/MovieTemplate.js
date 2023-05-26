import React from "react";
import styled from "styled-components";

//영화 목록을 화면에 출력하는 컴포넌트
function MovieTemplate({
  isDarkMode,
  year,
  title,
  poster,
  rating,
  genres,
  rank,
}) {
  //하나의 컴포넌트에서 스토어에 저장된 isDarkMode를 기준으로 라이트 모드와 다크 모드를 모두 구현
  return (
    <MovieBox isDarkMode={isDarkMode}>
      <MovieItem>
        <MovieRank isDarkMode={isDarkMode}>{rank}</MovieRank>
        <MovieImg
          src={poster}
          alt={title}
          title={title}
          isDarkMode={isDarkMode}
        ></MovieImg>
        <MovieDes isDarkMode={isDarkMode}>
          <h2>{title}</h2>
          <div>#Release Year: {year}</div>
          <div>#Rating : {rating}</div>
          <div>
            {genres.map((genre, index) => (
              <span key={index}>#{genre} </span>
            ))}
          </div>
        </MovieDes>
      </MovieItem>
    </MovieBox>
  );
}

const MovieBox = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#03071E" : "#e9ecef")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MovieRank = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#fff2b2" : "#dee2e6")};
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 8px 10px 5px rgba(255, 255, 255, 0.5);"
      : "0 8px 10px 5px rgba(0, 0, 0, 0.5)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
  padding: 1em;
  height: 1em;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 0.5em;
`;
const MovieImg = styled.img`
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 8px 17px 5px rgba(255, 255, 255, 0.5);"
      : "0 13px 20px 5px rgba(0, 0, 0, 0.8)"};
  width: 9em;
  height: 13em;
  border-radius: 1.2em;
`;

const MovieItem = styled.div`
  display: flex;
  margin: 1.2em;
`;

const MovieDes = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#fff2b2" : "#dee2e6")};
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 10px 15px 5px rgba(255, 255, 255, 0.5);"
      : "0 10px 15px 5px rgba(0, 0, 0, 0.2)"};
  color: #03071e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1em;
  font-size: 1.2em;
  padding: 0.2em 1.2em;
  border-radius: 1.2em;
`;

export default MovieTemplate;
