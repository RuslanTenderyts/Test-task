import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://643327783e05ff8b37361a24.mockapi.io/';


export const fetchTweets = async() => {
    const response = await axios.get('/users');
    if(!response.data) {
        return Promise.reject( new Error( `Користувачів не знайдено` ));
    };
    return response.data;
};

export const addfollow = async(id, currentFollowers) => {
    const newFollowers = currentFollowers + 1;
    console.log(id, newFollowers);
    const response = await axios.put(`/users/${id}`,{followers:newFollowers});
    if(!response.data) {
        return Promise.reject( new Error( `помилка підписка` ));
    };
    console.log(response)
    return response.data;
};

export const deleteFollow = createAsyncThunk(
'users/deleteFollow',
async (userId, thunkAPI) => {
    try {
    const res = await axios.get('/users');
    return res.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
}
);