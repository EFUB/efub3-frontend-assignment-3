import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import PopularMoviePage from "./page/PopularMoviePage";
import NowplayingMoviePage from "./page/NowplayingMoviePage";
import Button from "./components/Button";

const App = () => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        // isDarkMode가 true인 경우 type을 light로
        if (isDarkMode) {
            dispatch({ type: "light" });
        }
        // isDarkMode가 false인 경우 type을 dark로
        else {
            dispatch({ type: "dark" });
        }
    };
    
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <>
            <Div isDarkMode={isDarkMode}>
            <Wrapper>
                <Button onClick={handleClick}/>
                <NavBar />
                <Routes>
                    <Route path="/" element={<PopularMoviePage />} />
                    <Route path="/detail/:id" element={<MovieDetail />} />
                    <Route path="/nowplaying" element={<NowplayingMoviePage />} />
                </Routes>
            </Wrapper>
            </Div>
        </>

    );
}

const Div = styled.div`
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({isDarkMode}) => isDarkMode ? "black" : "white"};
    color: ${({isDarkMode}) => isDarkMode ? "white" : "black"};
`;

const Wrapper = styled.div`
    padding: auto;
    padding-top: 30px;
    top: 0;
`;

export default App;