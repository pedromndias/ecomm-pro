// ? Here we will have the action, which gets the data from the component and sends it to the reducer (after being processed).

// We import the type variables:
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
    console.log("action addToCart", data);

    // The return should be an object (that matches with the reducer)
    return {
        type: ADD_TO_CART,
        data // data: data (but ES6...)
    }
}

export const removeFromCart = (data) => {
    console.log("action removeFromCart", data);

    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.log("action emptyCart");

    return {
        type: EMPTY_CART,
    }
}