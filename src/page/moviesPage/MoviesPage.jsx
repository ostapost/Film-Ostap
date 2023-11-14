import { useEffect } from "react";
import s from "./MoviesPage.module.css";
import { SetPage, featchGetMovies } from "../../store/FilmSlice";
import { useDispatch, useSelector } from "react-redux";
import Poster from "../../smallComponent/posterFilm/Poster";
import { Pagination } from "@mui/material";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const { movies, totalpage, page, windowWidth } = useSelector(
        (state) => state.movies
    );
    console.log(movies.results);
    return (
        <div>
            <h1 className={s.movie_main_title}>Movies</h1>
            <div className={s.movie_pagination}>
                <Pagination
                    count={500}
                    page={page}
                    onChange={(_, num) => {
                        dispatch(SetPage(num));
                    }}
                    variant="outlined"
                    shape="rounded"
                    size={windowWidth > 670 ? "large" : "small"}
                    si="true"
                    color="secondary"
                />
            </div>
            <div>
                {movies.results && movies.results.length > 0 ? (
                    <ul className={s.movie_container}>
                        {movies.results.map((movie) => (
                            <li
                                key={movie.id}
                                className={s.movie_item}
                            >
                                <Poster movie={movie} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>LOADING</p>
                )}
            </div>
            <div className={s.movie_pagination}>
                <Pagination
                    count={500}
                    page={page}
                    onChange={(_, num) => {
                        dispatch(SetPage(num));
                    }}
                    variant="outlined"
                    shape="rounded"
                    size={windowWidth > 670 ? "large" : "small"}
                    si="true"
                    color="secondary"
                />
            </div>
        </div>
    );
};
// movies.overview;
export default MoviesPage;
