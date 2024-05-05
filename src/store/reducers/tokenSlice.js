import { createSlice } from '@reduxjs/toolkit';
import {
    loginApi
} from "./Actions";

const initialState = {
    isLoading: false,
    signError: false,
    signErrorMessage: "login failed",
    webSocket: false,

    refresh: "",
    access: ""
};

const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState: initialState,
    reducers: {
        refresh_change: (state, action) => {
            state.refresh = action.payload
        },
        access_change: (state, action) => {
            state.access = action.payload
        },
        signError_change: (state, action) => {
            state.signError = action.payload
        },
        signErrorMessage_change: (state, action) => {
            state.signErrorMessage = action.payload
        },
        isLoading_change: (state, action) => {
            state.isLoading = action.payload
        },
        webSocket_change: (state, action) => {
            state.isLoading = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginApi.pending, (state, action) => {
                state.isLoading = true
                state.signError = false
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isLoading = false
                state.signError = true
                state.signErrorMessage = action.payload
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.signError = false
                state.signErrorMessage = action.payload
                state.refresh = action.payload.refresh
                state.access = action.payload.access
            })
    }
});

export const { access_change, refresh_change, signErrorMessage_change, signError_change, isLoading_change, webSocket_change } = tokenSlice.actions;
export default tokenSlice.reducer
