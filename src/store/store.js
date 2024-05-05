import signupSlice from "./reducers/signupSlice";
import {configureStore} from "@reduxjs/toolkit";
import signInSlice from "./reducers/signInSlice";
import tokenSlice from "./reducers/tokenSlice";
import rtaSlice from "./reducers/rtaSlice";
import userSlice from "./reducers/userSlice";

const store = configureStore({
    reducer: {
        signupSlice: signupSlice,
        signInSlice: signInSlice,
        tokenSlice: tokenSlice,
        rtaSlice: rtaSlice,
        userSlice: userSlice
    },
});

export default store
