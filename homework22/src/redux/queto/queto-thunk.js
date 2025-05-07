import { createAsyncThunk } from "@reduxjs/toolkit";

import { getQuetoApi } from "../../shared/api/queto-api.js";

export const fetchQueto =createAsyncThunk(
    "queto/fetch",
    async(_, {rejectWithvalue}) =>{
        try{
            const data = await getQuetoApi()
            return data;
        }
        catch(error){
            return rejectWithvalue(error?.response?.data?.message);
        }
    }
)