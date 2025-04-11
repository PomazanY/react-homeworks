import { SET_USER_INFO } from "./types";

export const addUsersStore = payload =>({
    type:SET_USER_INFO,
    payload,
})