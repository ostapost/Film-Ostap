import { configureStore } from "@reduxjs/toolkit";
import { movieRducer } from "./FilmSlice";

export let store = configureStore({
    reducer: {
        movies: movieRducer,
    },
});
