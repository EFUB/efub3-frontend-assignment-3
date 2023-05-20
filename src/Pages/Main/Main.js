import MovieList from "./components/MovieList";
import useAxios from "../../hook/useAxios";
import styled from "styled-components";
import LoadingPage from "../../components/Loading";

//처음 들어가면 보이는 mainPage
//useAxios를 사용해서 data를 받아옴.
//loading 중이면 loadingPage가 나오고
//아니라면 MovieList를 렌더링함.
//movieList에는 axios에서 받은 data(movieList),laoding,error를 전달
const MainPage = () => {
  const url = "https://yts.mx/api/v2/list_movies.json";
  const [data, loading, error] = useAxios(url);
  const movieList = data;

  return (
    <Wrapper>
      {!loading ? (
        <MovieList movieList={movieList} loading={loading} error={error} />
      ) : (
        <LoadingPage />
      )}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div``;
