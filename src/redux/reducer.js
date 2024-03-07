// ? By default, if we execute an action, it will call all reducers. So we need to specify which action will call each reducer.

// We import the type variable:
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";


export const cartData = (data = [], action) => {
    // console.log("Reducer called", action);
    switch(action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condition ", action);
            return [action.data, ...data] // If we call ADD_TO_CART action, then we return its data together with the previous one.
        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART condition", action);
            data.length = data.length ? data.length-1 : [] // data.lenght-1 removes the last element
            return [...data]
        case EMPTY_CART:
            console.log("EMPTY_CART condition", action);
            data = [] // Empty the array.
            return [...data]
        default:
            console.log("No action called");
            return data // If no action is matched, we just return the initial data.
    }
}