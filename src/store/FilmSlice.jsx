import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let featchGetMovies = createAsyncThunk(
    "featchGetMovies",
    async (page, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=6bb64b991f726849e6f9512b97c9fa1a&page=${page}`
            );
            if (!res.ok) {
                throw new Error("Проблка блять");
            }
            let data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

let moviSlice = createSlice({
    name: "moviSlice",
    initialState: {
        movies: {},
        page: 1,
        error: null,
        status: null,
        windowWidth: "",
    },
    reducers: {
        // NextPage(state, action) {
        //     state.page = state.page + 1;
        // },
        // PrevPage(state, action) {
        //     if (state.page == 1) {
        //         return;
        //     } else state.page = state.page - 1;
        // },
        SetPage(state, action) {
            state.page = action.payload;
        },
        SetWindowWidth(state, action) {
            state.windowWidth = action.payload;
        },
    },
    extraReducers: {
        [featchGetMovies.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGetMovies.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.movies = action.payload;
            state.totalpage = action.payload.total_pages;
        },
        [featchGetMovies.rejected]: (state, action) => {
            state.error = action.payload;
        },
    },
});
export const { NextPage, PrevPage, SetPage, SetWindowWidth } =
    moviSlice.actions;
export const movieRducer = moviSlice.reducer;
