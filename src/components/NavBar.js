import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

    function setStyle({ isActive }) { // NavLink 스타일 적용 함수
            return {
                fontWeight: isActive ? "bolder" : "lighter",
                textDecoration: "none",
                fontSize: "20px",
                padding: "20px 0",
                textAlign: "center",
                margin: "auto",
                curser: "pointer",
                color: "black",
            };
    }

    return (
        <>
            <Wrapper>
                <NavLink
                    to={"/"}
                    style={setStyle}
                >
                    인기 영화
                </NavLink>
                <NavLink
                    to={"/nowplaying"}
                    style={setStyle}
                >
                    현재 상영 영화
                </NavLink>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 50%;
    background-color: aliceblue;
    border-radius: 20px;
    margin: auto;
    height: 20%;
    text-align: center;
`;


export default NavBar;