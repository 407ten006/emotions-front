import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #f4f4f4;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f4f4f4;
  width: 100%;
  height: 60px;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 20px;
`;

const Message = styled.div`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.48px;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: center;
`;

const NaverLogo = styled.span`
  background-color: #03c75a;
  color: #f4f4f4;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 10px;
`;

const Email = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.36px;
`;

const NextButton = styled.button`
  width: 100%;
  max-width: 335px;
  height: 65px;
  padding: 15px 0;
  background-color: #101010;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;
  cursor: pointer;
`;

const EmailCheck = () => {
  const navigate = useNavigate();

  const userEmail = "tiramisu@naver.com";

  const handleNext = () => {
    navigate("/register");
  };

  return (
    <PageContainer>
      <TopSection>
        <Header>
          <Title>기능명</Title>
        </Header>
        <Content>
          <Message>
            네이버 이메일을
            <br />
            확인해주세요
          </Message>
          <EmailBox>
            <NaverLogo>N</NaverLogo>
            <Email>{userEmail}</Email>
          </EmailBox>
        </Content>
      </TopSection>
      <NextButton onClick={handleNext}>다음</NextButton>
    </PageContainer>
  );
};

export default EmailCheck;
