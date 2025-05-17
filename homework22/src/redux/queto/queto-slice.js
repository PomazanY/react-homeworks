import { createSlice } from "@reduxjs/toolkit";
import { fetchQueto } from "./queto-thunk";

const initialState = {
    queto: '',
    author: '',
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
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchQueto.pending, pending)
            .addCase(fetchQueto.rejected, rejected)
            .addCase(fetchQueto.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.queto = payload.q;
                store.author = payload.a;
            })
    }
});


export default quetoSlice.reducer;