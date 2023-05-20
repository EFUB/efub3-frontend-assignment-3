import MainPage from "./page/MainPage";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const App = () => {
    return (
        <>
            <Wrapper>
                <NavBar />
                <MainPage />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    margin: auto;
    margin-top: 30px;
`;

export default App;