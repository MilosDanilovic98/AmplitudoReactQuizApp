import { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helperFunctions/shuffleAnswers";
import questions from "../data/data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(questions[0]),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex,
        showResults,
      };
    }
    case "RESTART": {
      return initialState;
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
