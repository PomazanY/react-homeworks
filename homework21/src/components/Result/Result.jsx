import { useDispatch, useSelector } from "react-redux";
import { resetQuestionnaire } from "../../redux/questionnaire/questionnaire-slice";
import { selectScore } from "../../redux/questionnaire/questionnaire-selected";

const Result = ()=>{
    const score = useSelector(selectScore);
   
    const dispatch = useDispatch();

    if(score === null) return null;

    return (
        <div>
            <h2>Your Score: {score}</h2>
            <button onClick={()=> dispatch(resetQuestionnaire())}>Try again</button>
        
        </div>
    )
}
export default Result;