import { createAsyncThunk } from "@reduxjs/toolkit";

import { getQuetoApi } from "../../shared/api/queto-api.js";

export const fetchQueto = createAsyncThunk(
    "queto/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const data = await getQuetoApi()
            return data[0];
        }
        catch (error) {
            return rejectWithValue(error?.message);
        }
    }
)