import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    dispatch({ type: "DarkMode" });
  };

  return (
    <AppContainer isDarkMode={isDarkMode}>
      <button onClick={handleDarkMode}>
        {isDarkMode ? "WhiteMode" : "DarkMode"}
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#000" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
`;
