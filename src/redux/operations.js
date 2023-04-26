import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://643327783e05ff8b37361a24.mockapi.io/';


export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const follow = createAsyncThunk(
    'users/addFollow',
    async (userId, thunkAPI) => {
      try {
        const res = await axios.get(`/users/${userId}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

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