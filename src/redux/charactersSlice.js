import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const charLimit = 12;

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=${charLimit}&offset=${page * charLimit}`,)
    return res.data;
});

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = [...state.items, ...action.payload];
            state.page += 1;
            if (action.payload.length < 12) {
                state.hasNextPage = false;
            };
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
});

export default charactersSlice.reducer;