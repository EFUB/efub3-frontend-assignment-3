import OneMovie from "./OneMovie";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
//메인 페이지에서 보여줄 영화 목록 컴포넌트
//main.js에서 props로 movieList, loading, error를 전달받음
//정렬 전의 데이터를 sortedData, 정렬 후의 데이터를 sortedData(state)로 지정
//정렬이 완료된 sortedData를 렌더링 할 예정
//위의 정렬 버튼에 따라 sort하는 방법이 달라진다.
const MovieList = ({ movieList, loading, error }) => {
  const movieData = movieList.data.movies;
  //정렬 후 데이터를 보관하는 sortedData, 초기값은 movieData
  const [sortedData, setSortedData] = useState(movieData);
  //오른쪽 위에 있는 정렬 방식에 따라 달라지는 state
  //만약 최신순 정렬 상태이면 true, 평점순 정렬 상태이면 false가 된다.
  //기본상태는 최신순 정렬이다. ㄴ
  const [current, setCurrent] = useState(true);

  //최신순 정렬 상태로 바꿔주는 함수
  //영화의 year 속성을 비교하여 가장 최신순으로 sort한다.
  //완료되면 sortedData에 넣어주고, current상태를 true로 바꿔준다.
  const sortCurrent = () => {
    const sortedArr = movieData.sort((a, b) => b.year - a.year);
    setSortedData(sortedArr);
    setCurrent(true);
  };

  //평점순 정렬 상태로 바꿔주는 함수
  //영화의 rating 속성을 비교하여 가장 최신순으로 sort한다.
  //완료되면 sortedData에 넣어주고, current상태를 false로 바꿔준다.
  const sortRate = () => {
    const sortedArr = movieData.sort((a, b) => b.rating - a.rating);
    setSortedData(sortedArr);
    setCurrent(false);
  };

  //처음 시작시에는 기본으로 sortCurrent(최신순 정렬)을 실행한다.
  useEffect(() => {
    sortCurrent();
  }, []);

  //로딩중이라면 로딩 페이지를 보여준다.
  //CurrentButton(최신순 정렬)을 누르면 sortCurrent가,
  //RateButton(평점순 정렬)을 누르면 sortRate가 실행된다.
  //해당 sortedData를 map을 통해 하나하나씩 OneMovie컴포넌트로 렌더링한다.

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ListWrapper>
          <ButtonContainer>
            <CurrentButton
              onClick={() => {
                sortCurrent();
              }}
              current={current}
            >
              <div>최신순</div>
              <div>정렬</div>
            </CurrentButton>
            <RateButton
              onClick={() => {
                sortRate();
              }}
              current={current}
            >
              <div>평점순</div>
              <div>정렬</div>
            </RateButton>
          </ButtonContainer>
          {sortedData &&
            sortedData.map((movie, index) => (
              <OneMovie key={movie.id} movie={movie} index={index} />
            ))}
        </ListWrapper>
      )}
    </div>
  );
};
export default MovieList;

export const ListWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer = styled.div`
  height: 100px;
  position: absolute;
  top: 10px;
  right: 30px;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const ModeButton = styled.button`
  height: 70px;
  width: 100px;
  font-size: 20px;
  background-color: ${(props) => (props.current ? "#f7d0f3" : "white")};
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  :hover {
    background-color: #e6dce2;
  }
`;

const CurrentButton = styled.button`
  height: 70px;
  width: 100px;
  font-size: 20px;
  background-color: ${(props) => (props.current ? "#f7d0f3" : "white")};
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  :hover {
    background-color: #e6dce2;
  }
`;

const RateButton = styled.button`
  height: 70px;
  width: 100px;
  font-size: 20px;
  background-color: ${(props) => (props.current ? "white" : "#f7d0f3")};
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  :hover {
    background-color: #e6dce2;
  }
`;
