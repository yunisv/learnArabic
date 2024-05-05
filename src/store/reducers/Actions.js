import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

// For login user
export const loginApi = createAsyncThunk('api/login', async ({username, password}) => {

    try {
        const response =  await axios.post(`http://127.0.0.1:8000/app/api/login/`, {
            username: username,
            password: password,
        }, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        })
        // if (response.data.message === 'Login successful') {
        //     // navigation.navigate("DrawerNavigationRoutes", { replace: true })
        // } else {
        //     console.warn('Please login again');
        // }
        return response.data
    } catch (error) {
        console.log(`${error.message}`)
        return {session: "false"}
        // throw new Error(error.message);
    }
});


export const otpSendApi = createAsyncThunk('api/otpSendApi', async ({phone, navigation}) => {

    try {
        const response =  await axios.post(`http://91.107.199.238/api/auth/otp/send/`, {
            phone: `+994${phone.slice(-9)}`,
        }, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        })
        if (response.status === 200) {
            // navigation.navigate("DrawerNavigationRoutes", { replace: true })
            return "send"
        }
    } catch (error) {
        console.log(`${JSON.stringify(error.response.data)}`)
        return JSON.stringify(error.response.data)
        // throw new Error(error.message);
    }
});

export const otpConfirmApi = createAsyncThunk('api/otpConfirmApi', async ({phone, otp, navigation}) => {

    try {
        const response =  await axios.post(`http://91.107.199.238/api/auth/otp/verify/`, {
            phone: `+994${phone.slice(-9)}`,
            otp: otp
        }, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        })
        if (response.status === 200) {
            // navigation.navigate("DrawerNavigationRoutes", { replace: true })
            return "confirmed"
        }
    } catch (error) {
        console.log(`${JSON.stringify(error.response.data)}`)
        return JSON.stringify(error.response.data)
        // throw new Error(error.message);
    }
});

export const registerApi = createAsyncThunk('api/registerApi', async ({first_name, last_name, phone, password, email, birthday, navigation}) => {

    try {
        const response =  await axios.post(`http://91.107.199.238/api/auth/users/`, {
            phone: `+994${phone.slice(-9)}`,
            first_name: first_name,
            last_name: last_name,
            password: password,
            email: email,
            birthday: `${birthday}`
        }, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        })
        if (response.status === 201) {
            // navigation.navigate("DrawerNavigationRoutes", { replace: true })
            return "registered"
        }
    } catch (error) {
        console.log(`${JSON.stringify(error.response.data)}`)
        return JSON.stringify(error.response.data)
        // throw new Error(error.message);
    }
});


export const getWordTranslation = createAsyncThunk('api/getWordTranslation', async ({topic_id}) => {

    try {
        if (topic_id) {
            const response =  await axios.get(`http://127.0.0.1:8000/app/api/get-word-translation/${topic_id}/`, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })

            if (response.status === 200) {
                // navigation.navigate("DrawerNavigationRoutes", { replace: true })
                return response.data
            }
        } else {
            const response =  await axios.get(`http://127.0.0.1:8000/app/api/get-word-translation/`, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })

            if (response.status === 200) {
                // navigation.navigate("DrawerNavigationRoutes", { replace: true })
                return response.data
            }
        }
    } catch (error) {
        console.log(`${JSON.stringify(error.response.data)}`)
        return JSON.stringify(error.response.data)
        // throw new Error(error.message);
    }
});