import { useEffect } from "react";
import s from "./GenrePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Poster from "../../smallComponent/posterFilm/Poster";
import { Pagination } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SetPage } from "../../store/GenrSlice";

const GenrePage = () => {
    const dispatch = useDispatch();
    let { arrayOfGenres, page } = useSelector((state) => state.genre);
    // console.log(page);
    const { windowWidth } = useSelector((state) => state.movies);
    return (
        <div>
            <h1 className={s.movie_main_title}>Genre</h1>
            <div className={s.movie_pagination}>
                <Pagination
                    count={arrayOfGenres.total_pages}
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
                {arrayOfGenres.results && arrayOfGenres.results.length > 0 ? (
                    <ul className={s.movie_container}>
                        {arrayOfGenres.results.map((movie) => (
                            <NavLink
                                key={movie.id}
                                to={`/movies/${movie.id}`}
                            >
                                <li
                                    key={arrayOfGenres.results.title}
                                    className={s.movie_item}
                                >
                                    <Poster movie={movie} />
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                ) : (
                    <h1>LOADING</h1>
                )}
            </div>
            <div className={s.movie_pagination}>
                <Pagination
                    count={arrayOfGenres.total_pages}
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

export default GenrePage;
