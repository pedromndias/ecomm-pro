// ? By default, if we execute an action, it will call all reducers. So we need to specify which action will call each reducer.

// We import the type variable:
import { ADD_TO_CART } from "./constant";


export const cartData = (data = [], action) => {
    // console.log("Reducer called", action);
    switch(action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condition ", action);
            return [action.data, ...data] // If we call ADD_TO_CART action, then we return its data together with the previous one.
        default:
            console.log("No action called");
            return [] // If no action is matched, we just return empty.
    }
}