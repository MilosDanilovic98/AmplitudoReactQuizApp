import React, { useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import Question from "../question/question";
import "./quizBox.css";

const Quizbox = ({}) => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div className="quiz_box">
      {quizState.showResults && <div>Showing Results</div>}
      {/* Show quiz */}
      {!quizState.showResults && (
        <div>
          <div>
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <header>
            <div className="title">Awesome Quiz Application</div>

            <div className="timer">
              <div className="time_left_txt">Time Left:</div>
              <div className="timer_sec">15</div>
            </div>
          </header>

          <section>
            <Question></Question>
            {/* <div className="option_list">
          {questions[count].offeredAnswers.map((answer) => (
            <div onClick={() => handleAnswerOptionClick(answer.isTrue)}>
              {answer.answerText}
            </div>
          ))}
        </div>*/}
          </section>
          {/* footer of Quiz Box */}
          <footer>
            {/* <div className="total_que">{score}/20 correct</div> */}
            <div
              className="nextBtn"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              Next Question
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Quizbox;
