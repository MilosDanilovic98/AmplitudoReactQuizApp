import React, { useEffect, useContext } from "react";
import { QuizContext } from "../../context/quizContext";

const Timer = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const seconds = quizState.timerSeconds;
  const isActive = quizState.timerActive;

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch({ type: "TIMER_PLUS" });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
    </div>
  );
};

export default Timer;
