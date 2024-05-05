import { createSlice } from '@reduxjs/toolkit';
import {
    loginApi
} from "./Actions";

const initialState = {
    isLoading: false,
    error: false,

    phoneInput: "",
    phoneInputLoading: false,
    phoneInputError: false,
    phoneInputErrorMessage: "Please enter valid phone number",

    secureTextEntry: true,
    passwordInput: "",
    passwordInputError: false,
};

const signInSlice = createSlice({
    name: 'signInSlice',
    initialState: initialState,
    reducers: {
        phoneInput_change: (state, action) => {
            state.phoneInput = action.payload
        },
        phoneInput_validation: (state) => {
            state.phoneInput = state.phoneInput.slice(-9)
        },
        phoneInputError_change: (state, action) => {
            state.phoneInputError = action.payload
        },

        secureTextEntry_change: (state, action) => {
            state.secureTextEntry = action.payload
        },
        passwordInput_change: (state, action) => {
            state.passwordInput = action.payload
        },
        passwordInputError_change: (state, action) => {
            state.passwordInputError = action.payload
        },
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(loginApi.pending, (state, action) => {
    //             state.status = 'loading'
    //         })
    //         .addCase(loginApi.rejected, (state, action) => {
    //             state.status = 'error'
    //         })
    //         .addCase(loginApi.fulfilled, (state, action) => {
    //             const todow = action.payload
    //         })
    // }
});

export const { passwordInput_change, passwordInputError_change, phoneInput_change, phoneInput_validation,
    phoneInputError_change, secureTextEntry_change } = signInSlice.actions;
export default signInSlice.reducer
