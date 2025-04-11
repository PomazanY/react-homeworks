import { SET_USER_INFO } from "./types";
import {nanoid} from "nanoid"

const initialStore = {
    users: [
        {
            id: nanoid(),
            username: 'John Doe',
            status: 'online',
        }
    ]
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...store, users: [action.payload] }
        default:
            return store;
    }

}
export default reducer;