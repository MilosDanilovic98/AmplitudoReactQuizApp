import { useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import "./question.css";
const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return <div className="questionText">{currentQuestion.question}</div>;
};

export default Question;
