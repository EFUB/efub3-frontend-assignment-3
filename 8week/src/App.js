import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Datas from "./components/Datas";
import Hits from "./components/Hits";
import styled from "styled-components";

function App() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Main>
        <Navigation activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === "current" && <Datas />}
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
