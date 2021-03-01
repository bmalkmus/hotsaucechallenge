import {combineReducers} from "redux";
import sauceReducer from "./sauceReducer";



const rootReducer = combineReducers({
    sauces: sauceReducer,
});

export default rootReducer