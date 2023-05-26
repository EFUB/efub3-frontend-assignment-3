import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Detail = (props) => {
  //영화종류에 따라 상세 페이지가 달라야해서 동적으로 id를 지정해줌
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [Mdetail, setMdetail] = useState("");

  //api에서 값을 불러오는 함수
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    const json = await response.json();
    setMdetail(json.data.movie);
    setLoading(false);

    console.log(json);
  };

  //페이지가 처음 실행될 때 getMovie 함수가 불려옴.
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="Detail">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="detail">
          <h1>{Mdetail.title}</h1>
          <img src={Mdetail.medium_cover_image} />
          <h3>{`Rating: ${Mdetail.rating}`}</h3>
          <h3>{`Running Time: ${Mdetail.runtime} min`}</h3>
        </div>
      )}
    </div>
  );
};

export default Detail;
