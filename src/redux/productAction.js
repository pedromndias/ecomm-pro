// ? This action will be specific for the product list 

import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    let data = "hello"
    console.log("PRODUCT_LIST", data);

    return {
        type: PRODUCT_LIST,
        data
    }
}