import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import obatReducer from "./obatReducer";
import dokterReducer from "./dokterReducer";

const reducer = combineReducers({
  adminReducer,
  obatReducer,
  dokterReducer,
});

export default reducer;
