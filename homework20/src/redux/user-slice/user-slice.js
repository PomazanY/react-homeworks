import { createSlice } from "@reduxjs/toolkit";

const users = [
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Charlie Lee", email: "charlie.lee@example.com" },
    { name: "Diana Clark", email: "diana.clark@example.com" },
    { name: "Ethan Brown", email: "ethan.brown@example.com" }
  ];

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: users
    },
    reducers: {}
});


export default userSlice.reducer;