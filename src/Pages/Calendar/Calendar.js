import React, { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-bottom: 10px;
`;

const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`;

const Day = styled.div`
  flex: 0 0 30%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const getFormattedDate = (date) => {
    const month = date.getMonth() + 1; // Months are 0-based
    return `${month}`;
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(<Day key={day}>{day}</Day>);
    }

    return days;
  };

  return (
    <CalendarContainer>
      <Header>
        <Button onClick={handlePrevMonth}>&lt;</Button>
        <span>{getFormattedDate(currentDate)}</span>
        <Button onClick={handleNextMonth}>&gt;</Button>
      </Header>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
