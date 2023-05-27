import axios from "axios";
import React, { useEffect, useState } from "react";
import DataItem from "./DataItem";
import styled from "styled-components";
// 현재상영작에 대해 알려줌
function Datas() {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDatas = async () => {
      try {
        setError(null);
        setDatas(null);
        setLoading(true);
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=56a520caeb62a10a620b8f6c60ef5527&language=ko&page=1&region=KR"
        );
        setDatas(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getDatas();
  }, []);

  if (loading) return <div>로딩중..</div>;

  if (error) return <div>에러가 발생했습니다</div>;

  if (!datas) return null;
  // tmdb api를 가져옴
  return (
    <div>
      <Heading>Now Playing🎬</Heading>
      <div>
        <DataList>
          {datas.results.map((data) => (
            <DataItem
              key={data.id}
              imgSrc={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={data.title}
              title={data.title}
              vote_average={data.vote_average}
              overview={data.overview}
            />
          ))}{" "}
        </DataList>
      </div>
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

const DataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

export default Datas;
