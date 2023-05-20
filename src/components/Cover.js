import styled from "styled-components";
import { Link } from "react-router-dom";

const Cover = ({ movies }) => {
  // home 화면 커버 영화
  return (
    <CoverContainer>
      <InfoContainer>
        <CoverTitle>{movies.title}</CoverTitle>
        <Info>{movies.summary}</Info>
        <Link to={`/info/${movies.id}`}>
          <DetailBtn>Detail Info</DetailBtn>
        </Link>
      </InfoContainer>
      <ImgContainer>
        <CoverImg src={movies.medium_cover_image} />
        <BgImg src={movies.background_image} />
      </ImgContainer>
    </CoverContainer>
  );
};

const CoverContainer = styled.div`
  position: relative;
  height: 600px;
`;

const DetailBtn = styled.button`
  width: 150px;
  height: 45px;
  background-color: gray;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin-top: 40px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  position: absolute;
  margin-top: 160px;
  z-index: 1;
  width: 40rem;
  height: 20rem;
  margin-left: 50px;
`;

const ImgContainer = styled.div`
  position: absolute;
  z-index: -1;
`;

const CoverTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 30px;
`;

const Info = styled.p`
  font-size: 17px;
  margin-top: -15px;
`;

const CoverImg = styled.img`
  width: 18rem;
  margin-right: 80px;
  top: 140px;
  z-index: 1;
  position: absolute;
  right: 0;
  border-radius: 10px;
`;

const BgImg = styled.img`
  width: 100vw;
  height: 750px;
  filter: blur(10px);
`;

export default Cover;
