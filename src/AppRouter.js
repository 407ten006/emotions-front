import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DiaryPage from "./Pages/DiaryEntryForm/DiaryEntryForm";
import Calendar from "./Pages/CalendarPage/CalendarPage";
import LoginPage from "./Components/Login/Login";
import NaverCallback from "./Components/Login/NaverCallback";
import DailyDiaryPage from "./Pages/DailyDiaryPage/DailyDiaryPage";
import EmailCheck from "./Components/Login/EmailCheck";
import RegisterForm from "./Components/Login/RegisterForm";
import EmotionResultPage from "./Pages/EmotionResultPage/EmotrionResultPage";
import SettingPage from "./Pages/SettingPage/SettingPage";
import EmotionInfo from "./Pages/EmotionInfo/EmotionInfo";
import MonthlyEmotionPage from "./Pages/MonthlyEmotionPage/MonthlyEmotionPage";
import KaKaoCallback from "./Components/Login/KaKaoCallback";

const AppRouter = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Routes>
      {/* 홈 */}
      <Route path="/" element={<LoginPage />} />
      {/* 캘린더 */}
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/monthcard" element={<MonthlyEmotionPage />} />

      {/* 로그인 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/email-check" element={<EmailCheck />} />
      <Route path="/naver-callback" element={<NaverCallback />} />
      <Route path="/kakao-callback" element={<KaKaoCallback />} />
      <Route path="/register" element={<RegisterForm />} />
      {/* 다이어리 */}
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/diary/:year/:month/:day" element={<DailyDiaryPage />} />
      <Route path="/emotionResult" element={<EmotionResultPage />} />
      {/* 설정  */}
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/emotionInfo" element={<EmotionInfo />} />
    </Routes>
  );
};

export default AppRouter;
