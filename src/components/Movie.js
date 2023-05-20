import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Movie = ({ id, cover, title }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <img src={cover} alt="" />
      <div>{title}</div>
    </NavLink>
  );
};

const Container = styled.div``;

export default Movie;
