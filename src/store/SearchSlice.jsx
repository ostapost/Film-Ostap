import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let featchGetSearch = createAsyncThunk(
    "featchGetSearch",

    async (query, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=6bb64b991f726849e6f9512b97c9fa1a`
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять з пошуком");
            }
            let data = await res.json();
            return data.results;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

let SearchSlice = createSlice({
    name: "search",
    initialState: {
        searchList: [],
        query: "",
        status: null,
        error: null,
        isOpen: false,
        burgerOpen: false,
    },
    reducers: {
        GetQuerty(state, action) {
            state.query = action.payload;
        },
        SetQuerty(state, action) {
            state.query = action.payload;
        },
        SetOpen(state, action) {
            state.isOpen = state.searchList.length > 0 ? true : false;
            state.isOpen = !!action.payload;
            state.query = state.isOpen == false ? "" : state.query;
        },
        BurgerSetOpen(state, action) {
            state.burgerOpen = action.payload;
        },
    },
    extraReducers: {
        [featchGetSearch.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGetSearch.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.searchList = action.payload;
        },
        [featchGetSearch.rejected]: (state, action) => {
            state.error = action.payload;
            console.log(action.payload);
        },
    },
});

export const { GetQuerty, SetOpen, BurgerSetOpen } = SearchSlice.actions;
export const SearchReducer = SearchSlice.reducer;
