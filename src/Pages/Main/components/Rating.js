import styled from "styled-components";

//평점을 계산하여 별(5개 만점)으로 바꿔주는 함수이다.
//이는 Onemovie, detailpage에서 쓰인다
//movie의 정보를 props로 받아오면 다음과 같이 계산한다.
//1. rate를 정수부분만 남긴다, 1.5 => 1
//2. 2로 나눠서 몫을 구한다.
//3. 해당 별 이미지를 보여준다.
const RatingStar = (movie) => {
  const ratingNum = movie.movie.rating;

  const RatingStarNum = (num) => {
    const starNum = Math.floor(Math.trunc(num) / 2);
    return `/image/${starNum}star.png`;
  };

  return <StarImg src={RatingStarNum(ratingNum)} />;
};

export default RatingStar;

const StarImg = styled.img`
  width: 150px;
  height: 20px;
`;
