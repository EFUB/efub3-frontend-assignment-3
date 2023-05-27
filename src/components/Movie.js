import Detail from "../routes/Detail";
import { Link } from "react-router-dom";

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

  return (
    <div className="Movie">
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <div className="content">
        <div className="left">
          <img src={medium_cover_image} />
        </div>
        <div>
          <p>{`개봉년도: ${year}`}</p>
          <p>{`평점: ${rating}`}</p>
          <div>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="summary">
        <p>{lightSummary}...</p>
      </div>
    </div>
  );
};

export default Movie;
