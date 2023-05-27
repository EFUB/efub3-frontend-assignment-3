import axios from "axios";
import React, { useEffect, useState } from "react";
import HitItem from "./HitItem";
import styled from "styled-components";
//추천작들을 보여줌
function Hits() {
  const [hits, setHits] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHits = async () => {
      try {
        setError(null);
        setHits(null);
        setLoading(true);
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=56a520caeb62a10a620b8f6c60ef5527&language=ko&page=1&region=KR"
        );
        setHits(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getHits();
  }, []);

  if (loading) return <div>로딩중..</div>;

  if (error) return <div>에러가 발생했습니다</div>;

  if (!hits) return null;

  return (
    <div>
      <Heading>Recommendation💚</Heading>
      <Order>
        <div>
          <HitList>
          {" "}
          {hits.results.map((hit) => (
            <HitItem
              key={hit.id}
              imgSrc={`https://image.tmdb.org/t/p/w300/${hit.poster_path}`}
              alt={hit.title}
              title={hit.title}
              vote_average={hit.vote_average}
              overview={hit.overview}
            />
          ))}{" "}
          </HitList>
        </div>
      </Order>
    </div>
  );
}

const Heading = styled.h1`
  font-size: 24px;
  color: yellowgreen;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;
const HitList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;


const Order = styled.ol`
  flex-direction: row;
`;
export default Hits;
