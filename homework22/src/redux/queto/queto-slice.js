import { createSlice } from "@reduxjs/toolkit";
import { fetchQueto } from "./queto-thunk";

const initialState = {
    id: '',
    url: '',
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
                store.id = payload.id;
                store.url = payload.url;
            })
    }
});


export default quetoSlice.reducer;