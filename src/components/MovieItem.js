import styled from "styled-components";
import { Link } from "react-router-dom";

// 개별 랭크 & 포스터 표시
const MovieItem = ({ id, cvImg, rank }) => {
  return (
    <>
      <Link key={id} to={`/info/${id}`} style={{ textDecoration: "none" }}>
        <Rank>{rank}</Rank>
        <Poster id={id} src={cvImg} />
      </Link>
    </>
  );
};

const Rank = styled.p`
  color: white;
  font-size: 170px;
  line-height: 150px;
  font-weight: 700;
  display: inline-block;
  margin: 0;
  font-family: "Foldit", cursive;
`;

const Poster = styled.img`
  width: 13%;
  margin-right: 13px;
  margin-bottom: 13px;
  border-radius: 7px;
`;

export default MovieItem;
