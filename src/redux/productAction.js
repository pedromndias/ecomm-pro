// ? This action will be specific for the product list 

import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    return {
        type: PRODUCT_LIST,
        data: "apple"
    }
}