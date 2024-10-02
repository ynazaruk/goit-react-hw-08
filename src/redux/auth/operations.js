import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/"

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", newUser)
    setAuthHeader(response.data.token)
    return response.data   
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logIn = createAsyncThunk("auth/login", async (values, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", values)
    setAuthHeader(response.data.token)
    return response.data  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout")
    clearAuthHeader()
  } catch (error) {
    clearAuthHeader()
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState()
  setAuthHeader(reduxState.auth.token)
  try {
    const response = await axios.get("/users/current")  
    return response.data  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)    
  }
}, {
  condition: (_, thunkAPI) => {
    const reduxState = thunkAPI.getState()
    return reduxState.auth.token !== null
  }
})