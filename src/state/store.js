import { applyMiddleware, createStore } from "redux";
import {reducers} from "./reducers";
import thunk from "redux-thunk";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"persist-store",
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)

export const store = createStore(persistedReducer,applyMiddleware(thunk));

export const persistor = persistStore(store);
