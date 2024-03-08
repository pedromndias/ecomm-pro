// ? This reducer will be connect to the specific saga by its type SET_PRODUCT_LIST. It will get the data from the saga (which is handling the async call triggered by the action).

import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.log("SET_PRODUCT_LIST condition", action);
            return [...action.data]
        default:
            return data
    }
}