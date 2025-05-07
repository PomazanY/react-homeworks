import { createSlice } from "@reduxjs/toolkit";
import { fetchQueto } from "./queto-thunk";

const initialState = {
    name: 'Affenpinscher',
    bred_for: 'Small rodent hunting, lapdog',
    loading: false,
    error: null,
}
const pending = (store) => {
    store.loading = true;
    store.error = null;
}
const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
}

const quetoSlice = createSlice({
    name: 'queto',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchQueto.pending, pending)
            .addCase(fetchQueto.rejected, rejected)
            .addCase(fetchQueto.fulfilled, (store, { payload }) => {
                store.loading = false;
                
                store.name = payload.name;
                store.bred_for = payload.bred_for;
            })
    }
});


export default quetoSlice.reducer;