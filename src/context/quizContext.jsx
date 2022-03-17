import { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helperFunctions/shuffleAnswers";
import questions from "../data/data";
const shuffled = questions.sort(() => 0.5 - Math.random());
let selected = shuffled.slice(0, 10);
const initialState = {
  questions: selected,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswersCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  started: false,
  timerActive: false,
  timerSeconds: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START": {
      return {
        ...state,
        timerActive: true,
        started: true,
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        currentAnswer: "",
        showResults,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "TIMER_PLUS": {
      return {
        ...state,
        timerSeconds: state.timerSeconds + 1,
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
