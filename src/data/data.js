const data = [
  {
    question: "What does CSS stand for?",
    incorrectAnswers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    incorrectAnswers: [
      "In the <body> section",
      "At the end of the document",
      "You can't refer to an external style sheet",
    ],
    correctAnswer: "In the <head> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "Which is the correct CSS syntax?",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    incorrectAnswers: [
      "' this is a comment",
      "// this is a comment",
      "// this is a comment //",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    question: "Which property is used to change the background color?",
    incorrectAnswers: ["color", "bgcolor", "bgColor"],
    correctAnswer: "background-color",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
  },
  {
    question: " Javascript is an _______ language",
    incorrectAnswers: ["Object-Based", "Procedureal", "None of the above"],
    correctAnswer: "Object-Oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    incorrectAnswers: ["var", "let", "none of the above"],
    correctAnswer: "both var and let",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    incorrectAnswers: ["var", "let", "constant"],
    correctAnswer: "const",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    incorrectAnswers: ["is in", "exists", "be"],
    correctAnswer: "in",
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    incorrectAnswers: ["Boolean", "Undefined", "Integer"],
    correctAnswer: "Object",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    incorrectAnswers: ["parse", "convert", "none of the above"],
    correctAnswer: "stringify()",
  },
  {
    question: "Which of the following are closures in Javascript?",
    incorrectAnswers: ["Variables", "Functions", "Objects"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    incorrectAnswers: ["Node", "Vue", "React"],
    correctAnswer: "Cassandra",
  },
  {
    question:
      "What keyword is used to declare an asynchronous function in Javascript?",
    incorrectAnswers: ["await", "timeOut", "check"],
    correctAnswer: "async",
  },
  {
    question: "How to stop an interval timer in Javascript?",
    incorrectAnswers: ["clearTImer", "intervalover", "timerStop"],
    correctAnswer: "clearInterval",
  },
  {
    question: "Which of the following are not server-side Javascript objects?",
    incorrectAnswers: ["Date", "FileUpload", "Function"],
    correctAnswer: "All of the above",
  },
  {
    question:
      "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
    incorrectAnswers: [
      "Object Encapsulation",
      "Object Inheritence",
      "None of the Above",
    ],
    correctAnswer: "Object Serialization",
  },
];

export default data;
