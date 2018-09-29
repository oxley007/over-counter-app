// src/js/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../Reducers/index";

//import { AsyncStorage } from "react-native";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

//const initialState = {};
const middleware = [thunk];
const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
