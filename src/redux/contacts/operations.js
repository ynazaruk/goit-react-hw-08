import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts")
    return response.data  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", newContact)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})