import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let featchGetId = createAsyncThunk(
    "featchGetId",

    async (id, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=6bb64b991f726849e6f9512b97c9fa1a`
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять");
            }
            let data = await res.json();
            // console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

let idSlice = createSlice({
    name: "idSlice",
    initialState: {
        IdMoviesPerson: {},
    },
    reducers: {},
    extraReducers: {
        [featchGetId.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGetId.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.IdMoviesPerson = action.payload;
        },
        [featchGetId.rejected]: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const idReducer = idSlice.reducer;
