import { FILTER_ITEM } from "./types";

export const filterItem = value => ({
    type: FILTER_ITEM,
    payload: value
})