import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice/user-slice";

const store = configureStore({
    reducer: {
        users: userReducer
    }
});
export default store;