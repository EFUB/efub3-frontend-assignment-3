import React from "react";
import styled from "styled-components";
import Header from "./component/Header.js";
import Movie from "./component/Movie.js";
import { Provider } from "react-redux";
import store from "./store.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store.js";

//스토어 공급
function App() {
  return (
    <Provider store={store}>
      <Header />
      <DarkModeOptionContainer />
      <Movie />
    </Provider>
  );
}

function DarkModeOptionContainer() {
  //스토어에 저장된 값 사용
  const isDarkMode = useSelector((state) => state.isDarkMode);

  //모드를 바꾸는 버튼이 눌리면 스토어에 저장된 값을 변경
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <DarkModeOption onClick={handleToggle} isDarkMode={isDarkMode}>
      {isDarkMode ? "Change to Light Mode!" : " Change to Dark Mode!"}
    </DarkModeOption>
  );
}

const DarkModeOption = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#03071E" : "#e9ecef")};
  color: ${(props) => (props.isDarkMode ? "#FFF" : "#000")};
  padding: 1em 1em;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default App;
