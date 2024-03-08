// ? Here we will create the Saga to handle asynchronous operations. Note the generator function* and the put to dispatch the action.

import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

// ! The db will be executed with json-server, to then pass objects to the ecomm-pro project. To run this the command: navigate to the db folder and "json-server --watch db.json --port 3500"

// Let's create a function to call in the saga, to get all the products:
function* getProducts() {
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json();
    // console.log("PRODUCT_LIST", data);
    // Now we use the put function to set the data in the reducer:
    yield put({type: SET_PRODUCT_LIST, data})
}

// And a function do search for products:
function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json()
    console.log("Action is called", result);
    yield put({type: SET_PRODUCT_LIST, data: result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
