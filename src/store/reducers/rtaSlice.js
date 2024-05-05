import { createSlice } from '@reduxjs/toolkit';
import {
    getWordTranslation,
    loginApi
} from "./Actions";

const initialState = {
    isLoading: false,
    error: false,
    errorMessage: "",
    percent_complete: 0,
    word_id: null,
    word_arabic: '',
    img_url: "",
    variants: [],
    answer: ""
};

const rtaSlice = createSlice({
    name: 'rtaSlice',
    initialState: initialState,
    reducers: {
        percent_complete_change: (state, action) => {
            state.percent_complete = action.payload
        },
        word_id_change: (state, action) => {
            state.word_id = action.payload
        },

    },
    extraReducers: builder => {
        builder
            .addCase(getWordTranslation.pending, (state, action) => {
                state.isLoading = true
                state.error = false
            })
            .addCase(getWordTranslation.rejected, (state, action) => {
                state.isLoading = false
                state.error = true
            })
            .addCase(getWordTranslation.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = false
                if (action.payload.message) {
                    state.error = true
                    state.errorMessage = action.payload.message
                } else {
                    state.word_id = action.payload.word_id
                    state.percent_complete = action.payload.percent_complete
                    state.word_arabic = action.payload.word_arabic
                    state.img_url = action.payload.img_url
                    state.answer = action.payload.answer
                    state.variants = action.payload.variants
                }
            })
    }
});

export const { percent_complete_change, word_id_change } = rtaSlice.actions;
export default rtaSlice.reducer
