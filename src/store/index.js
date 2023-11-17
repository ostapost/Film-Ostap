import { configureStore } from "@reduxjs/toolkit";
import { movieRducer } from "./FilmSlice";
import { idReducer } from "./IdFilmSlice";
import { SearchReducer } from "./SearchSlice";
import { GenrReducer } from "./GenrSlice";

export let store = configureStore({
    reducer: {
        idFilm: idReducer,
        movies: movieRducer,
        search: SearchReducer,
        genre: GenrReducer,
    },
});
