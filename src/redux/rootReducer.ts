import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { studentSectionReducer } from "./Student/Section/section.reducer";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['studentSection'],
}

const rootReducer = combineReducers({
    studentSection: studentSectionReducer
});
export type TRootReducer = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);