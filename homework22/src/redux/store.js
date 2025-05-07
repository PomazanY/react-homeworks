import { configureStore } from "@reduxjs/toolkit";

import quetoReducer from "./queto/queto-slice"

const store = configureStore({
    reducer: {
        queto: quetoReducer
    }
})
export default store;