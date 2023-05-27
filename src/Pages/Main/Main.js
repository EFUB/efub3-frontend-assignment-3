import MovieList from "./components/MovieList";
import useAxios from "../../hook/useAxios";
import styled from "styled-components";
import LoadingPage from "../../components/Loading";
import { useSelector } from "react-redux";
//처음 들어가면 보이는 mainPage
//useAxios를 사용해서 data를 받아옴.
//loading 중이면 loadingPage가 나오고
//아니라면 MovieList를 렌더링함.
//movieList에는 axios에서 받은 data(movieList),laoding,error를 전달
const MainPage = () => {
  const url = "https://yts.mx/api/v2/list_movies.json";
  const [data, loading, error] = useAxios(url);
  const movieList = data;

  //useSelector를 사용해서 해당 mode에 따라서 배경색이 다르게 나오게 함.
  const mode = useSelector((state) => state);

  return (
    <Wrapper mode={mode}>
      {!loading ? (
        <MovieList movieList={movieList} loading={loading} error={error} />
      ) : (
        <LoadingPage />
      )}
    </Wrapper>
  );
};

export default MainPage;

//mode에 따라서 배경색과 색을 다르게 지정함.
const Wrapper = styled.div`
  background-color: ${(props) => (props.mode ? "white" : "black")};
  color: ${(props) => (props.mode ? "black" : "white")};
  background-color: "white";
  color: "black";
`;
