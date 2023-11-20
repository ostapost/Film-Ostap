import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let featchGetPopularMovie = createAsyncThunk(
    "featchGetPopularMovie",

    async (arr_inf, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/trending/${arr_inf[0]}/${arr_inf[1]}?api_key=6bb64b991f726849e6f9512b97c9fa1a`
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять");
            }
            let data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

export let featchGetPopularPerson = createAsyncThunk(
    "featchGetPopularPerson",

    async (arr_inf, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/trending/${arr_inf[0]}/${arr_inf[1]}?api_key=6bb64b991f726849e6f9512b97c9fa1a`
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять");
            }
            let data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

export let featchGetPopularTV = createAsyncThunk(
    "featchGetPopularTV",

    async (arr_inf, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/trending/${arr_inf[0]}/${arr_inf[1]}?api_key=6bb64b991f726849e6f9512b97c9fa1a`
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять");
            }
            let data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

let PopularSlice = createSlice({
    name: "PopularSlice",
    initialState: {
        popularMovie: [],
        popularPerson: [],
        popularTv: [],
        whenArr: ["day", "week"],
        whoArr: ["movie", "person", "tv"],
    },
    reducers: {
        ChangeWhenArr(state, action) {
            state.whenArr = state.whenArr.reverse();
            console.log(state.whenArr);
            console.log(action.payload);
        },
    },
    extraReducers: {
        [featchGetPopularMovie.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGetPopularMovie.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.popularMovie = action.payload.results;
        },
        [featchGetPopularMovie.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [featchGetPopularPerson.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGetPopularPerson.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.popularPerson = action.payload.results;
        },
        [featchGetPopularPerson.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [featchGetPopularTV.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGetPopularTV.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.popularTv = action.payload.results;
        },
        [featchGetPopularTV.rejected]: (state, action) => {
            state.error = action.payload;
        },
    },
});
export const { ChangeWhenArr } = PopularSlice.actions;
export const PopularReducer = PopularSlice.reducer;
