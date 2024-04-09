import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import {filtersReducer} from "./filtersSlice";
import authReducer from './auth/slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});
