import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Movie = ({ id, cover, title }) => {
  const theme = useSelector((state) => state);

  return (
    <Container>
      <NLink to={`/detail/${id}`} theme={theme}>
        <Wrapper theme={theme}>
          <Image src={cover} alt="" />
          <Title>{title}</Title>
        </Wrapper>
      </NLink>
    </Container>
  );
};

const Container = styled.div``;

const NLink = styled(NavLink)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
`;

const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background: ${(props) => props.theme.hover};
  }
`;

const Image = styled.img``;

const Title = styled.div``;

export default Movie;
