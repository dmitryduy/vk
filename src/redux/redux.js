import {applyMiddleware, combineReducers, createStore} from "redux";
import headerReducer from "./reducers/headerReducer";
import navigationBarReducer from "./reducers/navigationBarReducer";
import thunk from "redux-thunk";
import messagesReducer from "./reducers/messagesReducer";

const reducer = combineReducers({
    headerReducer,
    navigationBarReducer,
    messagesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));


export default store;