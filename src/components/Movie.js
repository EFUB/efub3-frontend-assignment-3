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
`;

export default Movie;
