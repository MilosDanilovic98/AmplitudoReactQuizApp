import React, { useContext, useState } from "react";
import { QuizContext } from "../../context/quizContext";
import Question from "../question/question";
import "./quizBox.css";
import Timer from "../timer/timer";
const Quizbox = ({}) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const score =
    quizState.correctAnswersCount + "/" + quizState.questions.length;
  return (
    <div className="quiz_box">
      {/* Start Box */}
      {!quizState.started && (
        <div>
          <p>Welcome to my Quiz</p>
          <p>Click on the button to begin</p>
          <div className="nextBtn" onClick={() => dispatch({ type: "START" })}>
            START
          </div>
        </div>
      )}
      {/* Result box */}
      {quizState.showResults && (
        <div>
          Showing Results:{score} Time:{quizState.timerSeconds}
          <div
            className="nextBtn"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {/* Show quiz */}
      {!quizState.showResults && quizState.started && (
        <div>
          <div>
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <header>
            <div className="title">Awesome Quiz Application</div>

            <div className="timer">
              <div className="time_left_txt">Time:</div>
              <div className="timer_sec">
                <Timer />
              </div>
            </div>
          </header>

          <section>
            <Question></Question>
          </section>
          {/* footer of Quiz Box */}
          <footer>
            <div className="total_que">{score} correct</div>
            <div
              className="nextBtn"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              GIVE UP
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Quizbox;
