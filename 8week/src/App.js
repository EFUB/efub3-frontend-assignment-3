import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Datas from "./components/Datas";
import Hits from "./components/Hits";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./redux/Home";

// 페이지 상단에 현재상영작, 추천작 버튼을 넣습니다 -> Navigation 컴포넌트
function App() {
  //버튼에 대한 useState
  const [activeTab, setActiveTab] = useState(""); // 현재 선택된 탭을 저장하는 상태 값
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // 다크 모드 상태 관리를 위한 useState
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode); // 다크 모드 상태 토글 함수
  };

  const theme = {
    backgroundColor: darkMode ? "black" : "white", // 배경색 테마 설정
    textColor: darkMode ? "white" : "black", // 텍스트 색상 테마 설정
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          {/* Home 컴포넌트에 다크 모드와 토글 함수 전달 */}
          <Home darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </Provider>
      {/* <Main>에 styled components를 사용할 예정 */}

      <Main>
        {/* // Navigation 컴포넌트를 렌더링합니다. activeTab과 onTabClick props를 전달 */}
        <Navigation activeTab={activeTab} onTabClick={handleTabClick} />
        {/* activeTab이 "current"일 경우 Datas 컴포넌트를 렌더링 */}
        {activeTab === "current" && <Datas />}
        {/* activeTab이 "recommendation"일 경우 Hits 컴포넌트를 렌더링합니다.   */}
        {activeTab === "recommendation" && <Hits />}
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8%;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export default App;
