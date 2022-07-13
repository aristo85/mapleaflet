import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import sampleReducer from "./reducers/sampleReducer";

export const sagaMiddleware = createSagaMiddleware();
export default createStore(sampleReducer, applyMiddleware(sagaMiddleware));
