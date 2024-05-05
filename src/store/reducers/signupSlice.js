import { createSlice } from '@reduxjs/toolkit';
import {
    loginApi, otpConfirmApi, otpSendApi, registerApi
} from "./Actions";

const initialState = {
    isLoading: false,
    error: false,

    registerPathPage: 0,

    phoneInput: "",
    phoneInputLoading: false,
    phoneInputError: false,
    phoneInputErrorMessage: "Please enter valid phone number",

    otpInputLoading: false,
    otpErrorInput: false,
    otpErrorInputMessage: "OTP code incorrect",
    resendOtpActive: false,

    secureTextEntry: true,
    registerLoading: false,
    registerError: false,
    registerErrorMessage: "Register unsuccessful",
    firstNameInput: "",
    firstNameInputError: false,
    lastNameInput: "",
    lastNameInputError: false,
    emailInput: "",
    emailInputError: false,
    passwordInput: "",
    passwordInputError: false,
    passwordConfirmInput: "",
    passwordConfirmInputError: false,
    date_of_birth: null,
    date_of_birth_open: false,
    date_of_birthError: false,
    terms_of_privacy: false,
    terms_of_privacyError: false
};

const signupSlice = createSlice({
    name: 'signupSlice',
    initialState: initialState,
    reducers: {
        registerPathPage_change: (state, action) => {
            if (action.payload >=0 && action.payload <=2) {
                state.registerPathPage = action.payload
            }
        },

        phoneInput_change: (state, action) => {
            state.phoneInput = action.payload
        },
        phoneInput_validation: (state) => {
            state.phoneInput = state.phoneInput.slice(-9)
        },
        phoneInputError_change: (state, action) => {
            state.phoneInputError = action.payload
        },

        resendOtpActive_change: (state, action) => {
            state.resendOtpActive = action.payload
        },
        otpInputLoading_change: (state, action) => {
            state.otpInputLoading = action.payload
        },
        otpErrorInput_change: (state, action) => {
            state.otpErrorInput = action.payload
        },

        secureTextEntry_change: (state, action) => {
            state.secureTextEntry = action.payload
        },
        firstNameInput_change: (state, action) => {
            state.firstNameInput = action.payload
        },
        firstNameInputError_change: (state, action) => {
            state.firstNameInputError = action.payload
        },
        lastNameInput_change: (state, action) => {
            state.lastNameInput = action.payload
        },
        lastNameInputError_change: (state, action) => {
            state.lastNameInputError = action.payload
        },
        emailInput_change: (state, action) => {
            state.emailInput = action.payload
        },
        emailInputError_change: (state, action) => {
            state.emailInputError = action.payload
        },
        passwordInput_change: (state, action) => {
            state.passwordInput = action.payload
        },
        passwordInputError_change: (state, action) => {
            state.passwordInputError = action.payload
        },
        passwordConfirmInput_change: (state, action) => {
            state.passwordConfirmInput = action.payload
        },
        passwordConfirmInputError_change: (state, action) => {
            state.passwordConfirmInputError = action.payload
        },
        date_of_birth_change: (state, action) => {
            state.date_of_birth = action.payload
        },
        date_of_birth_open_change: (state, action) => {
            state.date_of_birth_open = action.payload
        },
        date_of_birthError_change: (state, action) => {
            state.date_of_birthError = action.payload
        },
        terms_of_privacy_change: (state, action) => {
            state.terms_of_privacy = action.payload
        },
        terms_of_privacyError_change: (state, action) => {
            state.terms_of_privacyError = action.payload
        },
        registerLoading_change: (state, action) => {
            state.registerLoading = action.payload
        },
        registerError_change: (state, action) => {
            state.registerError = action.payload
        },
        resetRegisterSlice(state) {
            // Сбросить состояние до начального
            Object.assign(state, initialState);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(otpSendApi.pending, (state, action) => {
                state.phoneInputLoading = true
                state.phoneInputError = false
            })
            .addCase(otpSendApi.rejected, (state, action) => {
                state.phoneInputLoading = false
                state.phoneInputError = true
                state.otpErrorInputMessage = action.payload
                state.phoneInputErrorMessage = action.payload
            })
            .addCase(otpSendApi.fulfilled, (state, action) => {
                state.phoneInputLoading = false
                state.phoneInputError = false
                state.otpErrorInputMessage = action.payload
                state.phoneInputErrorMessage = action.payload
            })
            .addCase(otpConfirmApi.pending, (state, action) => {
                state.otpInputLoading = true
                state.otpErrorInput = false
            })
            .addCase(otpConfirmApi.rejected, (state, action) => {
                state.otpInputLoading = false
                state.otpErrorInput = true
                state.otpErrorInputMessage = action.payload
            })
            .addCase(otpConfirmApi.fulfilled, (state, action) => {
                state.otpInputLoading = false
                state.otpErrorInput = false
                state.otpErrorInputMessage = action.payload
            })
            .addCase(registerApi.pending, (state, action) => {
                state.registerLoading = true
                state.registerError = false
            })
            .addCase(registerApi.rejected, (state, action) => {
                state.registerLoading = false
                state.registerError = true
                state.registerErrorMessage = action.payload
            })
            .addCase(registerApi.fulfilled, (state, action) => {
                state.registerLoading = false
                state.registerError = false
                state.registerErrorMessage = action.payload
            })
    }
});

export const { phoneInput_change, phoneInputError_change,phoneInput_validation, registerPathPage_change, resendOtpActive_change, registerError_change
    ,date_of_birth_open_change, date_of_birth_change, secureTextEntry_change, passwordInput_change, passwordConfirmInput_change, otpInputLoading_change
    ,passwordConfirmInputError_change, passwordInputError_change, terms_of_privacy_change, otpErrorInput_change, lastNameInputError_change, emailInput_change, firstNameInput_change
    , emailInputError_change , firstNameInputError_change, lastNameInput_change, date_of_birthError_change, terms_of_privacyError_change, registerLoading_change, resetRegisterSlice} = signupSlice.actions;
export default signupSlice.reducer
