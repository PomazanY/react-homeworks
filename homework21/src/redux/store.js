import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./questionnaire/questionnaire-slice";


const store = configureStore({
    reducer:{
        questionnaire: questionnaireReducer,
    },
})

export default store;