import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/Main/Main";
import DetailPage from "./Pages/Detail/Detail";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { createStore } from "redux";
//BrowserRotuer를 사용해서 라우팅함

//redux 사용부분 => 이 mode를 바꿀수 있는 함수는 compoentn 파일에
//ModeButton임. [components => ModeButton]
const isModeLight = true;

//reducer 함수 생성
//초기값, action 인자로 받고, 반환값 생성
function reducer(state = isModeLight, action) {
  if (action.type === "CHANGE") {
    return !state;
  }
  return state;
}

//저장고에 reducer 넣기
let store = createStore(reducer);

//provider를 사용해서 해당 컴포넌트들을 감ㅏ
//store를 하위 컴포넌트들에 전달함.
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail/*" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
