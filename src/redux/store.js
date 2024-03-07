// ? Here we collect the data from the reducers and then we send them to the app.

import {createStore} from "redux"

// We need to import the rootReducer:
import rootReducer from "./rootReducer"


// To create store we can use createStore but it needs a function (reducer)
const store = createStore(rootReducer)

export default store