import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

//сюда перечисляем все редьюсеры (это на будущее)
const rootReducer  = combineReducers({
    cashR: reducer,
})
//
//export default rootReducer;
export const store = createStore(rootReducer, composeWithDevTools());