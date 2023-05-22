import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/Main/Main";
import DetailPage from "./Pages/Detail/Detail";
import Header from "./components/Header";

//BrowserRotuer를 사용해서 라우팅함
//Header는 공통 컴포넌트
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/*" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
