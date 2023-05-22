import axios from "axios";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Info from "./components/Info";
import Movies from "./components/Movies";
import Popular from "./components/Popular";
import { Routes, Route } from "react-router-dom";

function App() {
  // 영화 데이터 저장할 state
  const [movies, setMovies] = useState([]);
  // 로딩 상태 확인할 state
  const [isLoading, setIsLoading] = useState(false);

  // 영화 데이터 가져오기
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovies(movies); // 데이터 저장
    setIsLoading(false); // 로딩 완료
  };

  // useEffect로 api 반복 호출 방지
  useEffect(() => {
    setIsLoading(true); // 로딩중
    getMovies();
  }, []);

  // 데이터 잘 저장됐는지 확인
  // console.log(movie);

  return (
    <>
      {isLoading ? <Loading /> : ""}
      {/* 데이터가 도착하지 않았는데 아래 컴포넌트를 렌더링하면 오류가 발생하므로 movies.length > 0 으로 확인 */}
      <Routes>
        <Route
          path="/"
          element={
            movies.length > 0 && <Intro loading={isLoading.toString()} />
          }
        />
        <Route
          path="/home"
          element={movies.length > 0 && <Home movies={movies} />}
        />
        <Route
          path="/info/:id"
          element={movies.length > 0 && <Info movies={movies} />}
        />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/popular" element={<Popular movies={movies} />} />
      </Routes>
    </>
  );
}

export default App;
