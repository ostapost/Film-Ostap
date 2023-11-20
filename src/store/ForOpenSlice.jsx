import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let ForOpenSlice = createSlice({
    name: "ForOpenSlice",
    initialState: {
        isOpenPopup: false,
    },
    reducers: {
        SetOpen(state, action) {
            state.isOpenPopup = true;
        },
        RemoveOpen(state, action) {
            state.isOpenPopup = false;
        },
    },
    extraReducers: {},
});
export const { RemoveOpen, SetOpen } = ForOpenSlice.actions;
export const ForOpenReducer = ForOpenSlice.reducer;
