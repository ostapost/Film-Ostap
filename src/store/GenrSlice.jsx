import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let featchGet_ArrOf_Genres = createAsyncThunk(
    "featchGet_ArrOf_Genres",

    async (arr, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6bb64b991f726849e6f9512b97c9fa1a&with_genres=${arr[0]}&page=${arr[1]} `
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять з жанрами");
            }
            let data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

export let featchGet_JUST_Genres = createAsyncThunk(
    "featchGetArrOfGenre",

    async (_, { rejectWithValue }) => {
        try {
            let res = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=6bb64b991f726849e6f9512b97c9fa1a& `
            );
            if (!res.ok) {
                throw new Error("Є проблємка блять з жанрами");
            }
            let data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.messages);
        }
    }
);

let GenrSlice = createSlice({
    name: "GenrSlice",
    initialState: {
        arrayOfGenres: [],
        genrsResults: [],
        isGenreOpen: false,
        choosedGenres: [],
        page: 1,
    },
    reducers: {
        SetGenreOpen(state, action) {
            state.isGenreOpen = action.payload;
        },
        SetChoosedGenres(state, action) {
            const genreId = action.payload;
            const index = state.choosedGenres.indexOf(genreId);

            if (index !== -1) {
                // Якщо id вже існує, видаліть його
                state.choosedGenres.splice(index, 1);
            } else {
                // Якщо id не існує, додайте його
                state.choosedGenres.push(genreId);
            }
        },
        SetPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: {
        [featchGet_ArrOf_Genres.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGet_ArrOf_Genres.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.arrayOfGenres = action.payload;
            // console.log(action.payload);
        },
        [featchGet_ArrOf_Genres.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [featchGet_JUST_Genres.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
        },
        [featchGet_JUST_Genres.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.genrsResults = action.payload.genres;
        },
        [featchGet_JUST_Genres.rejected]: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { SetGenreOpen, SetChoosedGenres, SetPage } = GenrSlice.actions;
export const GenrReducer = GenrSlice.reducer;
