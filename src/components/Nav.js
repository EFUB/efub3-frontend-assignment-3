import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";

const Nav = () => {
  const theme = useSelector((state) => state);
  console.log("Nav: ", theme);

  const dispatch = useDispatch();
  const toggleTheme = () => {
    if (theme.themeId === 0) dispatch({ type: "LIGHT_MODE" });
    else if (theme.themeId === 1) dispatch({ type: "DARK_MODE" });
  };

  return (
    <Container theme={theme}>
      <NLink to="/" theme={theme}>
        <SiNetflix size={40} />
      </NLink>
      <ThemeButton onClick={toggleTheme} theme={theme}>
        {theme.themeId === 0 ? (
          <BsMoonFill color={theme.color} size={30} />
        ) : (
          <BsSunFill size={30} />
        )}
      </ThemeButton>
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.hover};
`;

const NLink = styled(NavLink)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  margin: 10px;
`;

const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  border-radius: 100%;

  padding: 10px;
  margin: 10px;
  margin-left: auto;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${(props) => props.theme.hover};
  }
`;

export default Nav;
