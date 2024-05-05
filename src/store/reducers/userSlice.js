import { createSlice } from '@reduxjs/toolkit';
import {getWordTranslation, loginApi, tryConnect} from "./Actions";
import { message } from 'antd';

const initialState = {
    session: "",
    error: false,
    isLoading: false,

};

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        logoutAndClear: (state) => {
            state.session = ""
            state.error = false
            state.isLoading = false;
        },
        changeLoginModalOpen: (state, action) => {
            state.loginModalOpen = action.payload
        },
        showLogoutSuccessMessage: (state) => {
            // Обработка отображения сообщения об успешном выполнении здесь
            message.success('Вы успешно вышли из системы!');
        },
        showLogoutErrorMessage: (state) => {
            // Обработка отображения сообщения об успешном выполнении здесь
            message.error('Error when logout from account!');
        },
        showLoginSuccessMessage: (state) => {
            // Обработка отображения сообщения об успешном выполнении здесь
            message.success('Вы успешно вошли на аккаунт!');
        },
        showLoginErrorMessage: (state) => {
            // Обработка отображения сообщения об успешном выполнении здесь
            message.error('Ошибка при входе на аккаунт! Проверьте логин и пароль.');
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginApi.pending, (state, action) => {
                state.isLoading = true
                state.error = false
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isLoading = false
                state.error = true
                message.error('Ошибка при входе на аккаунт! Проверьте логин и пароль.');
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = false
                state.isLoading = false;
                if (action.payload.message === 'Login successful') {
                    message.success('Вы успешно вошли на аккаунт!');
                } else {
                    message.error('Ошибка при входе на аккаунт! Проверьте логин и пароль.');
                }
            })
    }
});

export const { logoutAndClear, changeLoginModalOpen, showLogoutSuccessMessage, showLoginErrorMessage, showLogoutErrorMessage, showLoginSuccessMessage } = userSlice.actions;
export default userSlice.reducer