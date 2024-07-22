import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingPage from "./Loading";

const NaverCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sendCodeToBackend = useCallback(
    async (code, state, provider) => {
      try {
        const response = await axios.post(
          `https://bumpy-bunny-koreaboardgamearena-36c727ad.koyeb.app/api/v1/auth/naver-login?provider=${provider}`,
          { code, state },
        );
        console.log("Login successful", response.data);
        localStorage.setItem("jwt_token", response.data.access_token);
        navigate("/email-check");
      } catch (error) {
        console.error("Login failed", error);
        alert("로그인에 실패했어요. 다시 시도해주세요.");
        navigate("/");
      }
    },
    [navigate],
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const provider = "naver";

    if (code && state) {
      sendCodeToBackend(code, state, provider);
    } else {
      console.error("Authorization code not found");

      navigate("/");
    }
  }, [location, navigate, sendCodeToBackend]);

  return <LoadingPage />;
};

export default NaverCallback;
