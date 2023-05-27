// Home.js
import React from 'react';
import styled from 'styled-components';

// 다크 모드와 토글 함수를 전달받아 사용하는 Home 컴포넌트
const Home = ({ darkMode, toggleTheme }) => {
  return (
    <Container darkMode={darkMode}>
      <ToggleButton onClick={toggleTheme}>
        {darkMode ? '라이트 모드' : '다크 모드'}
      </ToggleButton>
    </Container>
  );
};

// 컨테이너 스타일링
const Container = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
  color: ${({ darkMode }) => (darkMode ? 'yellow' : 'black')};
`;

// 토글 버튼 스타일링
const ToggleButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  color: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
`;

export default Home;
