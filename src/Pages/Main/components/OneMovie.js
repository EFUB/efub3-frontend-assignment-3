import styled from "styled-components";
import RatingStar from "./Rating";
import { useNavigate } from "react-router-dom";

//영화 하나의 컴포넌트. MovieList에서 props로 movie, index를 props로 전달받는다.
//navigate 상단의 뒤로 가기 버튼을 위해 썼다.
const OneMovie = ({ movie, index }) => {
  const id = movie.id;
  const navigate = useNavigate();

  //해당 영화를 누르면 detailPage로 이동시키는 문법이다.
  const onMoveDetailPage = () => {
    navigate(`/detail?id=${id}`);
  };

  //23번쨰 줄에서 index가 3이 이하이면 상단 왼쪽에 순위가 숫자로 표시된다.
  //index에서 1을 증가시켜 순위를 표시했다.
  //28번째 줄에서 러닝타임이 0이면 0대신 러닝타임 정보 없음이 뜨도록
  //하였다.
  return (
    <>
      <Wrapper onClick={onMoveDetailPage}>
        {index < 3 && <RankNum>{index + 1}</RankNum>}
        <MovieImg src={`${movie.medium_cover_image}`} />
        <MovieInfo>
          <Title>{movie.title_english}</Title>
          {movie.runtime === 0 ? (
            <Text>러닝타임 정보 없음</Text>
          ) : (
            <Text>러닝 타임 :{movie.runtime}분</Text>
          )}
          <Text>{movie.year}</Text>
          <RatingStar movie={movie} />
        </MovieInfo>
      </Wrapper>
    </>
  );
};

export default OneMovie;

const MovieImg = styled.img`
  width: 300px;
  height: 380px;
`;

const MovieInfo = styled.div`
  width: 280px;
  height: 100px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const RankNum = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: 900;
  border-radius: 50%;
  position: absolute;
  color: transparent;
  -webkit-text-stroke: 5px hotpink;
  left: -30px;
  top: -30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 300;
`;
