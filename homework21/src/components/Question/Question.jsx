import { useDispatch, useSelector } from "react-redux";

import { answerQuestion } from "../../redux/questionnaire/questionnaire-slice";
import { selectIsSubmitted } from "../../redux/questionnaire/questionnaire-selected";

const Question = ({ item }) => {
    const isSubmitted = useSelector(selectIsSubmitted);
    const dispatch = useDispatch()

    const handleChange = (id, index) => {
        dispatch(answerQuestion({ id, index }))
    }

    const elements = item.options.map((option, index) => (
        <label key={index}>
            <input type="radio"
                    name={`question-${item.id}`}
                    value={index}
                    checked={item.selectedAnswer === index}
                    onChange={()=> handleChange(item.id, index)}
                    disabled={isSubmitted}
            />
            {option}
        </label>
    ))
    return (
        <div>
            <h3>{item.text}</h3>
            <ul>
                {elements}
            </ul>
        </div>
    )
}
export default Question;