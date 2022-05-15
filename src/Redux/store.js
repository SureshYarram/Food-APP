
import {applyMiddleware,createStore,combineReducers}  from "redux"
import { LoginReducer } from "./Login/reducer"

const rootReducer =combineReducers({
    login:LoginReducer
})
export const store = createStore(rootReducer)