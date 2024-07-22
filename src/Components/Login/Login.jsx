import React from "react";
import { useNavigateExternal } from "../../hooks/useNavigateExternal";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: space-between;
  background-color: #1a1a1a;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginText = styled.p`
  font-size: 41.05px;
  font-weight: bold;
  color: #d9d000;
  text-align: center;
  line-height: 160%;
  letter-spacing: -0.821px;
`;

const LoginButton = styled.button`
  width: 100%;
  max-width: 335px;
  height: 65px;
  padding: 15px 0;
  background-color: #03c75a;
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

const NaverLogo = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Login = () => {
  const navigateExternal = useNavigateExternal();

  // TODO: clientId, redirectUri, naverLoginUrl 등은 .env 파일로 관리
  const clientId = "DBBq0YrcmGdcmZetwFd6";
  const redirectUri = encodeURIComponent(
    "http://localhost:3000/naver-callback",
  );

  // TODO: CSRF 방지를 위한 랜덤한 문자열 생성
  const state = "RANDOM_STATEsdsd";

  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  const handleLogin = () => {
    navigateExternal(naverLoginUrl);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginText>
          서비스명과
          <br />
          서비스로고
          <br />
          나오면
          <br />
          수정 예정입니다
        </LoginText>
      </LoginBox>
      <LoginButton onClick={handleLogin}>
        <NaverLogo>N</NaverLogo>
        네이버로 로그인
      </LoginButton>
    </LoginContainer>
  );
};

export default Login;
