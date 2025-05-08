import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState,
    reducers: {
        answerQuestion: (store, { payload }) => { //Сохраняет выбранный ответ
            const question = store.questions.find((item) => item.id === payload.id)
            if (question) question.selectedAnswer = payload.index
        },
        submitAnswers: (state) => { //Подсчитывает результат
            let score = 0;
            state.questions.forEach((q) => {
                if (q.selectedAnswer === q.correctAnswer) {
                    score += 1;
                }
            });
            state.score = score;
        },
        resetQuestionnaire: (state) => { //Очищает выбранные ответы и результат
            state.questions.forEach((q) => {
                q.selectedAnswer = null;
            });
            state.score = null;
        }
    }

})

export const { answerQuestion, submitAnswers, resetQuestionnaire } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;