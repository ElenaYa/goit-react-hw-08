import {createSlice} from '@reduxjs/toolkit';
import {login, logout, refreshUser ,register} from './operations';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
});
export default authSlice.reducer;