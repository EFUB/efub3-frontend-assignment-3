import { Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./global.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import styled from "styled-components";

function App() {
  const theme = useSelector((state) => state);
  //console.log("App: ", themeId, backgroundColor, color);

  const dispatch = useDispatch();
  const toggleTheme = () => {
    if (theme.themeId === 0) dispatch({ type: "LIGHT_MODE" });
    else if (theme.themeId === 1) dispatch({ type: "DARK_MODE" });
  };

  return (
    <Container theme={theme}>
      <ThemeButton onClick={toggleTheme}>테마 변경</ThemeButton>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const ThemeButton = styled.button``;

export default App;
