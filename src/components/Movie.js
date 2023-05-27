import Detail from "../routes/Detail";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Movie = ({
  medium_cover_image,
  title,
  year,
  rating,
  genres,
  id,
  summary,
}) => {
  const lightSummary =
    summary.length > 100 ? summary.substring(0, 250) : summary;

  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <MovieSt>
      <h2 isDarkMode={isDarkMode}>
        <Link
          to={`/detail/${id}`}
          style={{ color: isDarkMode ? "yellow" : "black" }}
        >
          {title}
        </Link>
      </h2>
      <Content>
        <div>
          <MovieIMG src={medium_cover_image} />
        </div>
        <div>
          <MovieP>{`개봉년도: ${year}`}</MovieP>
          <MovieP>{`평점: ${rating}`}</MovieP>
          <div>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </div>
        </div>
      </Content>
      <div className="summary">
        <MovieP>{lightSummary}...</MovieP>
      </div>
    </MovieSt>
  );
};

export default Movie;

const MovieSt = styled.div`
  text-align: center;
  width: 500px;
  height: 450px;
  border: 1px solid gray;
  box-shadow: 0px 0px 5px 0px gray;

  margin: 10px 20px 20px 10px;
`;

const MovieP = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MovieIMG = styled.img`
  width: 170px;
  height: 210px;
  margin-right: 30px;
`;
