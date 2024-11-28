import { useState } from "react";
import styles from "./weekCalender.module.css";
import styled from "styled-components";

const StyledButton = styled.button<{$journalOn?:boolean;}>`
  background-color: black;
  font-size: 32px;
  color: ${props => props.$journalOn ? "white" : "grey"}; 
  padding: 16px;
`;

var curr = new Date();
var getDayOfWeek = (dayNumber:number) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[dayNumber];
  return dayOfWeek;
}

const SingleDay = (props:any) => {
  var getThisWeekDate = () => {
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week. 일요일부터 시작.
    return [first, first+1, first+2, first+3, first+4, first+5, first+6];
  }

  return (
    <StyledButton $journalOn={props.isJournal}>
      {!(props.isToday)?
      <div className={styles.dayAndDateContent}>
        <div className={styles.day}>{getDayOfWeek(props.day)}</div>
        <div className={styles.date}>{getThisWeekDate()[props.day]}</div>
      </div>
      :<div className={styles.todayContent}>
         <div className={styles.day}>{getDayOfWeek(props.day)}</div>
         <div className={styles.date}>{getThisWeekDate()[props.day]}</div>
      </div>
      }
    </StyledButton>
  )
}
export const WeekCalender = (props: any) => {
  var journalExistIn = props.isJournal;
  var sevenDays = [0,1,2,3,4,5,6];
  var todayDay = curr.getDay();

  return (<div>
    {sevenDays.map((num)=>{
      var journalYes = journalExistIn.includes(num);
      var isToday = false;
      if(todayDay == num) isToday = true;
      return <SingleDay key={num} day={num} isJournal={journalYes} isToday={isToday}
      />
    })
  }
  </div>
  );
};
