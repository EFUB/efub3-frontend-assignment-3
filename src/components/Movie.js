import Detail from "../routes/Detail";
import { Link } from "react-router-dom";

const Movie = ({ medium_cover_image, title, year, rating, genres, id }) => {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <p>{`개봉년도: ${year}`}</p>
      <p>{`평점: ${rating}`}</p>
      <div>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </div>
    </div>
  );
};

export default Movie;
