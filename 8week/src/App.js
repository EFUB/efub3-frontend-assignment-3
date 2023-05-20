import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Datas from "./components/Datas";
import Hits from "./components/Hits";
import styled from "styled-components";

// 페이지 상단에 현재상영작, 추천작 버튼을 넣습니다 -> Navigation 컴포넌트
function App() {
  //버튼에 대한 useState
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>

    {/* <Main>에 styled components를 사용할 예정 */}
      <Main> 
      {/* // Navigation 컴포넌트를 렌더링합니다. activeTab과 onTabClick props를 전달 */}
        <Navigation activeTab={activeTab} onTabClick={handleTabClick} /> 
        {/* activeTab이 "current"일 경우 Datas 컴포넌트를 렌더링 */}
        {activeTab === "current" && <Datas />} 
        {/* activeTab이 "recommendation"일 경우 Hits 컴포넌트를 렌더링합니다.   */}
        {activeTab === "recommendation" && <Hits />} 
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8%;
`;

export default App;
