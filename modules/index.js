import { combineReducers } from "redux";
import counter,{ counterSaga } from "./counter";
import user,{ userSaga } from './user'
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  user,
  loading
})
export function* rootSaga(){
yield all
}
export default rootReducer