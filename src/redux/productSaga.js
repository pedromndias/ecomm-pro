// ? Here we will create the Saga to handle asynchronous operations. Note the generator function* and the put to dispatch the action.

import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

// Let's create a function to call in the saga:
function* getProducts() {
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json();
    // console.log("PRODUCT_LIST", data);
    // Now we use the put function to set the data in the reducer:
    yield put({type: SET_PRODUCT_LIST, data})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
