import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../../hook/useAxios";
import styled from "styled-components";
import RatingStar from "../Main/components/Rating";
import LoadingPage from "../../components/Loading";

//해당 영화를 클릭하면 이동하는 디테일 페이지.
//
const DetailPage = () => {
  //useLoacation(파라미터 가져오는 기능)
  //useNavigate(페이지 이동하는 기능 ) 사용
  const location = useLocation();
  const navigate = useNavigate();

  //1. 해당 영화 데이터를 넣을 targetMovief를 state로 만듦
  const [targetMovie, setTargetMovie] = useState();

  //2. .useAxios를 사용해서 영화 데이터 다시 받아오기
  const url = "https://yts.mx/api/v2/list_movies.json";
  const [data, loading, error] = useAxios(url);

  //3. url에서 key가 id인 값을 찾아옴.
  //그 영화의 id를 찾아야 할 영화의 id인 targetId로 지정함.
  const urlParams = new URLSearchParams(location.search);
  const targetId = urlParams.get("id");

  //4. data가 변경될떄, 즉 useAxios를 통해 data가 받아와졌을때
  //받아온 데이터(movies) 중 id와 targetId가 일치하는 영화(movie)를 찾음
  //찾은 movie를 targetMovie라는 state에 넣어서 관리함.
  useEffect(() => {
    if (data && !loading) {
      const movies = data.data.movies;
      const movie = movies.find((movie) => movie.id === targetId / 1);
      setTargetMovie(movie);
    }
  }, [data]);

  //뒤로가기 버튼 : 오른쪽 상단에 위치
  const onMoveBackPage = () => {
    navigate(-1);
  };

  //targetMovie가 있다면 해당 영화의 디테일 페이지를 렌더링하고, 아직 없다면(위 과정 진행중이라면)
  //로딩 페이지를 보여줌.
  return (
    <>
      {targetMovie ? (
        <Wrapper>
          <BackButton onClick={onMoveBackPage}>뒤로 가기</BackButton>
          <MovieImg src={`${targetMovie.medium_cover_image}`} />
          <Text>
            <TitleContainer>
              <div>{targetMovie.title_english}</div>
              <RatingStar movie={targetMovie} />
            </TitleContainer>
            <IconContainer>
              <Icon>genres </Icon>
              <span>{targetMovie.genres}</span>

              <Icon>runtime</Icon>
              <span>{targetMovie.runtime}분</span>

              <Icon>year</Icon>
              <span>{targetMovie.year}년</span>
            </IconContainer>
            <DetailText>{targetMovie.description_full}</DetailText>
          </Text>
        </Wrapper>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};
export default DetailPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const MovieImg = styled.img`
  width: 400px;
  height: 600px;
`;

const Text = styled.div`
  width: 700px;
  font-size: 20px;
  margin-top: 50px;
`;

const TitleContainer = styled.div`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
`;
const DetailText = styled.div`
  margin-top: 30px;
  font-size: 20px;
  border-top: 3px solid pink;
  padding-top: 30px;
  padding-bottom: 100px;
  line-height: 30px;
`;

const Icon = styled.span`
  padding: 0 20px;
  height: 30px;
  color: white;
  background-color: #e892c9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 700px;
  span {
    padding: 0 20px;
  }
`;

//뒤로가기 버튼
const BackButton = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 30px;
  height: 70px;
  width: 100px;
  font-size: 20px;
  background-color: white;
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  :hover {
    background-color: #e6dce2;
  }
`;
