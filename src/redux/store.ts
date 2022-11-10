import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store