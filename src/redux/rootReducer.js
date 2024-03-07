// ? In order for a reducer to execute, it must be connected to the rootReducer, which will than be connected to the store.

import { combineReducers } from "redux"
import { cartData } from "./reducer"

export default combineReducers({
    cartData
})