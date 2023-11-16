import { NavLink } from "react-router-dom";
import s from "./SearchList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BurgerSetOpen, SetOpen } from "../../store/SearchSlice";

const SearchList = ({ searchList, changeFalse }) => {
    const { isOpen } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(SetOpen(false));
    };
    return (
        <>
            <div>
                {searchList ? (
                    <div
                        className={s.search_list_container}
                        style={{
                            display: isOpen ? "block" : "none",
                        }}
                    >
                        {searchList.length > 0 ? (
                            <ul className={s.search_list}>
                                {searchList.map((film) => (
                                    <li
                                        className={s.search_item}
                                        key={film.id}
                                        onClick={() => {
                                            handleClick();
                                            dispatch(BurgerSetOpen(false));
                                        }}
                                    >
                                        <NavLink
                                            key={film.id}
                                            className={s.search_link}
                                            to={`/movies/${film.id}`}
                                        >
                                            <img
                                                className={s.search_img}
                                                src={
                                                    "https://image.tmdb.org/t/p/w500" +
                                                    film.poster_path
                                                }
                                                alt=""
                                            />
                                            <div
                                                className={
                                                    s.search_title_and_rate
                                                }
                                            >
                                                <p className={s.search_title}>
                                                    {film.title}
                                                </p>
                                                <div
                                                    style={{
                                                        backgroundColor:
                                                            film.vote_average >=
                                                            7
                                                                ? "green"
                                                                : film.vote_average <=
                                                                  4
                                                                ? "red"
                                                                : "yellow",
                                                    }}
                                                    className={s.search_rate}
                                                >
                                                    {film.vote_average.toFixed(
                                                        1
                                                    )}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Not Finded</p>
                        )}
                    </div>
                ) : (
                    <p>{error}</p>
                )}
            </div>
        </>
    );
};

export default SearchList;
