import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const NavBar = () => {
    // location.pathname을 확인해서 "/detail/:id"로 갈 경우 font-weight이 lighter가 되도록 수정
    const location = useLocation();
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <>
            <Wrapper isDarkMode={isDarkMode}>
                <NavStyle
                    to="/"
                    isActive={location.pathname === "/"}
                >
                    인기 영화
                </NavStyle>
                <NavStyle
                    to="/nowplaying"
                    isActive={location.pathname === "/nowplaying"}
                >
                    현재 상영 영화
                </NavStyle>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 50%;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "lightslategray" : "aliceblue")};
    border-radius: 20px;
    margin: auto;
    height: 20%;
    text-align: center;
`;

// 8주차 피드백 반영 및 수정
const NavStyle = styled(NavLink)`
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
    margin: auto;
    cursor: pointer;
    font-weight: ${({ isActive }) => (isActive ? "bolder" : "lighter")};
`;

export default NavBar;