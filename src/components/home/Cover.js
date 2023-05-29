import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cover = ({ movies }) => {
  // home 화면 커버 영화
  const bgcolor = useSelector((props) => props.backgroundColor);
  const coverColor = useSelector((props) => props.coverColor);

  return (
    <CoverContainer bgcolor={bgcolor}>
      <InfoContainer>
        <CoverTitle>{movies.title}</CoverTitle>
        <Info>{movies.summary.slice(0, 400)}</Info>
        <Link to={`/info/${movies.id}`}>
          <DetailBtn coverColor={coverColor} color={bgcolor}>
            Detail Info
          </DetailBtn>
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
  background-color: ${(props) => props.bgcolor};
`;

const DetailBtn = styled.button`
  width: 155px;
  height: 50px;
  background-color: ${(props) => props.coverColor};
  border: none;
  border-radius: 10px;
  color: ${(props) => props.color};
  font-size: 19px;
  font-weight: 600;
  margin-top: 45px;
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
  z-index: 0;
`;

const CoverTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 30px;
  color: white;
`;

const Info = styled.p`
  font-size: 17px;
  margin-top: -15px;
  color: white;
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
  height: 650px;
  filter: blur(10px);
`;

export default Cover;
