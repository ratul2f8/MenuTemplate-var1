import { createStore, applyMiddleware } from "redux";
import CreateSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./root.saga";
import { persistStore } from "redux-persist";
const sagaMiddleWare = CreateSagaMiddleware();
const middlewares:any[] = [sagaMiddleWare];
if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store);
const toImport = {store, persistStore}
export default toImport;