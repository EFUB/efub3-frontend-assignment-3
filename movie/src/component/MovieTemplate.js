import React from "react";
import styled from "styled-components";

//영화 목록을 화면에 출력하는 컴포넌트
function MovieTemplate({ id, year, title, poster, rating, genres }) {
  return (
    <MovieBox>
      <MovieItem>
        <MovieImg src={poster} alt={title} title={title}></MovieImg>
        <MovieDes>
          <h2>{title}</h2>
          <div>#Release Year: {year}</div>
          <div>#Rating : {rating}</div>
          <div>
            {/* 장르가 두 개 이상일때 한 칸 띄고 표시되도록 map 함수를 사용 */}
            {genres.map((genre) => (
              <span key={id}>#{genre} </span>
            ))}
          </div>
        </MovieDes>
      </MovieItem>
    </MovieBox>
  );
}

const MovieBox = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieImg = styled.img`
  width: 9em;
  height: 13em;
  border-radius: 16px;
  box-shadow: 0 13px 20px 5px rgba(0, 0, 0, 0.8);
`;

const MovieItem = styled.div`
  display: flex;
  margin: 15px;
`;

const MovieDes = styled.div`
  color: #03071e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1em;
  font-size: 20px;
  background-color: #dee2e6;
  padding: 2px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.2);
`;

export default MovieTemplate;
