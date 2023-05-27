import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Movie = ({ id, cover, title }) => {
  return (
    <NLink to={`/detail/${id}`}>
      <img src={cover} alt="" />
      <div>{title}</div>
    </NLink>
  );
};

const NLink = styled(NavLink)`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    background: lightgrey;
  }
`;

export default Movie;
