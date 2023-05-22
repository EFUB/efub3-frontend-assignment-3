import styled from "styled-components";
import { ReactComponent as Netflix } from "../images/netflix_icon2.svg";
import { Link } from "react-router-dom";

// 상단 메뉴바
const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/home">
        <NetflixIcon />
      </Link>
      <ListContainer>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <List>Home</List>
        </Link>
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <List>Movies</List>
        </Link>
        <Link to="/popular" style={{ textDecoration: "none" }}>
          <List>Popular</List>
        </Link>
      </ListContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-color: black;
  opacity: 80%;
  padding-top: 2px;
  z-index: 2;
`;

const NetflixIcon = styled(Netflix)`
  width: 100px;
  height: 80px;
  margin-left: 60px;
`;

const ListContainer = styled.div`
  display: flex;
  margin-right: 50px;
`;

const List = styled.p`
  font-size: 20px;
  margin-left: 50px;
  color: white;
`;

export default NavBar;
