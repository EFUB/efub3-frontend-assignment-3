import axios from "axios";
import { useState, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import Home from "./components/home/Home";
import Loading from "./components/Intro/Loading";
import Info from "./components/common/Info";
import Movies from "./components/movies/Movies";
import Popular from "./components/popular/Popular";
import { Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

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

  const initialState = {
    backgroundColor: "black",
    color: "white",
    coverColor: "#C4C4C4",
  };

  function reducer(currentState = initialState, action) {
    const newState = { ...currentState };

    if (action.type === "White") {
      newState.backgroundColor = "white";
      newState.color = "black";
      newState.coverColor = "#BC1111";
    }
    if (action.type === "Black") {
      newState.backgroundColor = "black";
      newState.color = "white";
      newState.coverColor = "#C4C4C4";
    }

    return newState;
  }

  const store = createStore(reducer);

  return (
    <>
      {isLoading ? <Loading /> : ""}
      {/* 데이터가 도착하지 않았는데 아래 컴포넌트를 렌더링하면 오류가 발생하므로 movies.length > 0 으로 확인 */}
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
