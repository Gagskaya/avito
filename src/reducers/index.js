import { combineReducers } from "redux";
import { items } from "./items";
import { filter } from "./filter";
export const rootReducer = combineReducers({
    items,
    filter
});
