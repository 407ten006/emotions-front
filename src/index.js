import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 393px; // 아이폰 15 기준
  max-height: 852px; // 아이폰 15 기준
  margin: 0 auto;
  //padding: 2rem;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppContainer>
      <AppRouter />
    </AppContainer>
  </Router>,
);

reportWebVitals();
