import { configureStore } from "@reduxjs/toolkit";
import  contactsReducer  from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from './auth/slice';
import storage from "redux-persist/lib/storage";
import {
    persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};
const persisteAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persisteAuthReducer,
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);