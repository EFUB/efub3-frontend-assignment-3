import React from "react";
import styled from "styled-components";

function HitItem({ imgSrc, alt, title, vote_average, overview }) {
  return (
    <ListItem>
      <Image src={imgSrc} alt={alt} />
      <Title>{title}</Title>
      <VoteAverage>평점: ✨{vote_average}</VoteAverage>
      <Overview>{overview}</Overview>
    </ListItem>
  );
}

const ListItem = styled.li`
  flex-direction: row;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  width: 400px;
  outline: auto;
`;

const Image = styled.img`
  width: 400px;
  height: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  font-weight: bold;
  margin: 10px 0;
  font-size: 18px;
`;

const VoteAverage = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  color: #888;
`;

const Overview = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  justify-content: center;
`;

export default HitItem;
