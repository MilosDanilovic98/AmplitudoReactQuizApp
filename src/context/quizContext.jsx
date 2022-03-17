import { createContext, useReducer } from "react";
import questions from "../data/data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    }
  }
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
