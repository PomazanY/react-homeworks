import { FILTER_ITEM } from "./types";

const initialState = {
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Anna" }
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

