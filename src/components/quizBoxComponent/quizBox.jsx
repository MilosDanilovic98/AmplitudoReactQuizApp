import React, { useRef, useState } from "react";
import "./quizBox.css";

const Quizbox = ({}) => {
  return (
    <div className="quiz_box">
      <header>
        <div className="title">Awesome Quiz Application</div>
        <div className="timer">
          <div className="time_left_txt">Time Left:</div>
          <div className="timer_sec">15</div>
        </div>
      </header>

      {/* <section>
        <div className="que_text">{questions[count].question}</div>
        <div className="option_list">
          {questions[count].offeredAnswers.map((answer) => (
            <div onClick={() => handleAnswerOptionClick(answer.isTrue)}>
              {answer.answerText}
            </div>
          ))}
        </div>
      </section> */}
      {/* footer of Quiz Box */}
      <footer>
        {/* <div className="total_que">{score}/20 correct</div> */}
      </footer>
    </div>
  );
};

export default Quizbox;
