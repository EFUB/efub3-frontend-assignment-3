import { ReactComponent as Netflix } from "../images/netflix_icon.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 시작 화면
const Intro = ({ loading }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <Block loading={loading}>
      <IntroContainer>
        <NetflixIcon />
        <Copy>WELCOME TO NETFLIX !</Copy>
        <P>"where entertainment begins."</P>
        <Btn onClick={handleClick}>START NOW</Btn>
      </IntroContainer>
    </Block>
  );
};

const Block = styled.div`
  display: ${(props) => (props.loading === "true" ? "none" : "block")};
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NetflixIcon = styled(Netflix)`
  width: 12rem;
  height: 12rem;
  margin-top: 190px;
`;

const Copy = styled.h1`
  font-size: 20px;
  margin-bottom: 7px;
`;

const P = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Btn = styled.button`
  background-color: #e14330;
  border: none;
  width: 22rem;
  height: 50px;
  color: white;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 150px;
  cursor: pointer;
`;

export default Intro;
