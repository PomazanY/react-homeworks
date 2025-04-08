import { FILTER_ITEM } from "./types";

const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Anna" },
    { id: 4, name: "David" },
    { id: 5, name: "Emma" },
    { id: 6, name: "Michael" },
    { id: 7, name: "Sophia" },
    { id: 8, name: "James" },
    { id: 9, name: "Olivia" },
    { id: 10, name: "Daniel" },
    { id: 11, name: "Isabella" },
    { id: 12, name: "William" },
    { id: 13, name: "Mia" },
    { id: 14, name: "Benjamin" },
    { id: 15, name: "Charlotte" }
  ],
    filter: ""
  };
const reducer = (store = initialState, action)=>{
    switch(action.type){
    case FILTER_ITEM:
        return {...store, filter: action.payload}
        default:
        return store
    }
    
};
export default reducer;

