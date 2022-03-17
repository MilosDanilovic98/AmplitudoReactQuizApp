import logo from "./logo.svg";
import "./App.css";
import Quizbox from "./components/quizBoxComponent/quizBox";
import { QuizProvider } from "./context/quizContext";
function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Quizbox />
      </QuizProvider>
    </div>
  );
}

export default App;
