import React, { useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import Question from "../question/question";
import "./quizBox.css";
import Timer from "../timer/timer";
const Quizbox = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const score =
    quizState.correctAnswersCount + "/" + quizState.questions.length;
  return (
    <div className="quiz_box">
      {/* Start Box */}
      {!quizState.started && (
        <div className="started">
          <h1>Welcome to my Quiz</h1>
          <h3>Click on the button to begin</h3>
          <div className="nextBtn" onClick={() => dispatch({ type: "START" })}>
            START
          </div>
        </div>
      )}
      {/* Result box */}
      {quizState.showResults && (
        <div className="showResults">
          <p>Correct Answers:{score}</p> Your Time:{quizState.timerSeconds}s
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
          <div className="questionCounter">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <header>
            <h2 className="title">Choose Your Answer!</h2>

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
