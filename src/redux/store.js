// ? Here we collect the data from the reducers and then we send them to the app.

import { configureStore } from "@reduxjs/toolkit"

// We need to import the rootReducer:
import rootReducer from "./rootReducer"
// And the saga and the middleware:
import productSaga from "./productSaga"
import createSagaMiddleware from "redux-saga"

// Let's create a variable for the saga middleware:
const sagaMiddleware = createSagaMiddleware()

// To create store we can use createStore but it needs both the reducer and the saga:
const store = configureStore({
    reducer: rootReducer,
    middleware: sagaMiddleware
})

// Now we run the productSaga inside the middleware:
sagaMiddleware.run(productSaga)

export default store