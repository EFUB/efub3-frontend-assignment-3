// url을 반환하는 함수

const TMDB_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_LANG = 'ko';
const BASE_REGION = 'KR';

export const getPopularMovies = () => {
  return `${BASE_URL}/movie/popular?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

export const getNowplayingMovies = () => {
  return `${BASE_URL}/movie/now_playing?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

export const getDetail = (movieId) => {
  return `${BASE_URL}/movie/${movieId}?api_key=${TMDB_KEY}&language=${BASE_LANG}&region=${BASE_REGION}`;
};

export const getImageUrl = (path, size) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};