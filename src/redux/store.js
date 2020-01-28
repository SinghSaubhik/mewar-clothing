import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root.reducer";

// This is because there can n number of middlewares.
// We will use spread operator to spread the bellow array in indivisual param in applyMiddleware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;