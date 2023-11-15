import { configureStore } from "@reduxjs/toolkit";
import { movieRducer } from "./FilmSlice";
import { idReducer } from "./IdFilmSlice";

export let store = configureStore({
    reducer: {
        idFilm: idReducer,
        movies: movieRducer,
    },
});
