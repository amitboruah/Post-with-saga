import { combineReducers } from "redux";
import postReducers from "./postReducers"

const rootReducer = combineReducers({postlist: postReducers})

export default rootReducer