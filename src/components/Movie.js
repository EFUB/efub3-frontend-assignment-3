import React from "react";

const Movie = ({ cover, title }) => {
  return (
    <div>
      <img src={cover} alt="" />
      <div>{title}</div>
    </div>
  );
};

export default Movie;
