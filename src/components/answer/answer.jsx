import { useContext } from "react";
import { QuizContext } from "../../context/quizContext";

import "./answer.css";
const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const [quizState, dispatch] = useContext(QuizContext);

  function bla() {
    onSelectAnswer(answerText);
    setTimeout(() => {
      dispatch({ type: "NEXT_QUESTION" });
    }, 1500);
  }
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => bla()}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
