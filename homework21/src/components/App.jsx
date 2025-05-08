import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "../redux/questionnaire/questionnaire-slice";
import { selectAllQuestionnaire, selectScore } from "../redux/questionnaire/questionnaire-selected";

import Question from "./Question/Question";
import Result from "./Result/Result";

function App() {

  const dispatch = useDispatch();
  const questions = useSelector(selectAllQuestionnaire)
  const score = useSelector(selectScore)

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };
  return (
    <>
      <h1>Questionnaire</h1>
      {questions.map((item) => (
        <Question key={item.id} item={item} />
      ))}
      {score === null && (
        <button onClick={handleSubmit}>Send</button>
      )}
      <Result />
    </>
  )
}

export default App
