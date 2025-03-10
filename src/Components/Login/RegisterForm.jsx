import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AngerSvg } from "../../assets/images/anger_noeye.svg";
import { ReactComponent as JoySvg } from "../../assets/images/joy_noeye.svg";
import { ReactComponent as PassionSvg } from "../../assets/images/passion_noeye.svg";
import { ReactComponent as SadnessSvg } from "../../assets/images/sadness_noeye.svg";
import { ReactComponent as ClearIcon } from "../../assets/images/inputClear.svg";
import api from "../../utils/api";
import useAuthStore from "../../stores/authStore";

const PageContainer = styled.div`
  margin: 0 auto;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px 0 20px;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  color: #f4f4f4;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 68px;
  margin-bottom: 130px;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.48px;
  margin-bottom: 20px;
`;

const EmoticonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

const NicknameSection = styled.div``;

const NicknameLabel = styled.label`
  display: block;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.36px;
`;

const InputContainer = styled.div`
  position: relative;
  height: 70px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledClearIcon = styled(ClearIcon)`
  width: 16px;
  height: 16px;
  fill: #f4f4f4;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.32px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.isInvalid ? "#E14C4C" : "#4A4A4A")};
  color: #f4f4f4;

  &::placeholder {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.32px;
  }

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: #e14c4c;
  font-size: 14px;
  position: absolute;
`;

const NextButton = styled.button`
  width: 100%;
  max-width: 335px;
  height: 65px;
  flex-shrink: 0;
  position: absolute;
  bottom: 20px;
  background-color: #101010;
  color: #f4f4f4;
  border: none;
  padding: 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.36px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 34px;

  &:disabled {
    background-color: #1f1f1f;
    color: #727272;
    cursor: not-allowed;
  }
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [newNickname, setNewNickname] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { accessToken, setNickname } = useAuthStore((state) => state);

  const checkNickname = useCallback(async () => {
    try {
      const response = await api.post(
        `/api/v1/users/check-nickname2`,
        {
          nickname: newNickname,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.status === 200 && response.data.data.is_valid) {
        setIsNicknameValid(true);
        setErrorMessage("");
        return true;
      } else {
        setIsNicknameValid(false);
        setErrorMessage(response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Failed to check nickname", error);
      setIsNicknameValid(false);
      setErrorMessage("닉네임 확인에 실패했습니다.");
      return false;
    }
  }, [newNickname, accessToken]);

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;

    if (newNickname.length > 8) {
      setErrorMessage("닉네임은 8자 이하로 입력해주세요.");
      setIsNicknameValid(false);
    } else {
      setErrorMessage("");
      setIsNicknameValid(true);
      setNewNickname(newNickname);
    }
  };

  const handleClearNickname = () => {
    setNewNickname("");
    setIsNicknameValid(false);
    setErrorMessage("");
  };

  const updateUserProfile = async () => {
    try {
      const response = await api.patch(
        `/api/v1/users/me`,
        {
          nickname: newNickname,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.status === 200) {
        setNickname(newNickname);
      }
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  const handleNext = async () => {
    const isValid = await checkNickname();

    if (isValid) {
      try {
        await updateUserProfile();
        navigate("/diary");
      } catch (error) {
        console.error("Failed to update nickname", error);
        setErrorMessage("닉네임 업데이트에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <PageContainer>
      <TopSection>
        <WelcomeMessage>
          반가워요,
          <br />
          마이모지에 오신 걸 환영해요!
        </WelcomeMessage>
        <EmoticonContainer>
          <AngerSvg width={28} height={28} />
          <JoySvg width={28} height={28} />
          <SadnessSvg width={28} height={28} />
          <PassionSvg width={28} height={28} />
        </EmoticonContainer>
      </TopSection>
      <NicknameSection>
        <NicknameLabel>닉네임</NicknameLabel>
        <InputContainer>
          <InputWrapper>
            <NicknameInput
              placeholder="사용하실 닉네임을 입력해주세요"
              value={newNickname}
              onChange={handleNicknameChange}
              isInvalid={!isNicknameValid && errorMessage !== ""}
            />
            {newNickname && (
              <ClearButton onClick={handleClearNickname} type="button">
                <StyledClearIcon />
              </ClearButton>
            )}
          </InputWrapper>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
      </NicknameSection>
      <NextButton onClick={handleNext} disabled={!isNicknameValid}>
        입력 완료
      </NextButton>
    </PageContainer>
  );
};

export default RegisterForm;
