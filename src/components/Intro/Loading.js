import styled from "styled-components";

// 로딩 페이지
const Loading = () => {
  return (
    <LoadingContainer>
      <Img src="https://www.sluni114.co.kr/img/loading/loading.gif" />
      Loading...
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
`;

const Img = styled.img`
  width: 100px;
  margin-bottom: 17px;
`;

export default Loading;
