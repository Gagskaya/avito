import { combineReducers } from "redux";
import { users } from "./users";
import { filter } from "./filter";
export const rootReducer = combineReducers({
    users,
    filter
});
