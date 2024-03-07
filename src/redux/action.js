// ? Here we will have the action, which gets the data from the component and sends it to the reducer (after being processed).

// We import the type variable:
import { ADD_TO_CART } from "./constant";

export const addToCart = (data) => {
    // console.log("action is called", data);
    
    // The return should be an object (that matches with the reducer)
    return {
        type: ADD_TO_CART,
        data // data: data (but ES6...)
    }
}