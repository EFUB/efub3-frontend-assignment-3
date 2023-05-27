import { Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./global.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import styled from "styled-components";
import Nav from "./components/Nav";

function App() {
  const theme = useSelector((state) => state);

  return (
    <Container theme={theme}>
      <Nav />
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

export default App;
