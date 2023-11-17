import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./GenreChoose.module.css";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    SetChoosedGenres,
    SetGenreOpen,
    featchGet_ArrOf_Genres,
    featchGet_JUST_Genres,
} from "../../store/GenrSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BurgerSetOpen } from "../../store/SearchSlice";

const GenreChoose = () => {
    const { windowWidth } = useSelector((state) => state.movies);
    console.log(windowWidth);
    const dispatch = useDispatch();
    let { isGenreOpen, genrsResults, choosedGenres, page } = useSelector(
        (state) => state.genre
    );
    console.log(page);
    useEffect(() => {
        dispatch(featchGet_JUST_Genres());
    }, []);
    useEffect(() => {
        dispatch(featchGet_ArrOf_Genres([choosedGenres, page]));
    }, [page]);

    const mouseLeaveHandler = () => {
        dispatch(SetGenreOpen(false));
    };
    const mouseEnterHandler = () => {
        dispatch(SetGenreOpen(true));
    };

    const toggleDropdown = () => {
        dispatch(SetGenreOpen(!isGenreOpen));
    };

    return (
        <div className={s.genres_choose_wrapper}>
            <div
                onMouseEnter={windowWidth >= 851 ? mouseEnterHandler : null}
                className={s.genres_choose_conteiner}
                onClick={() =>
                    dispatch(SetGenreOpen(!isGenreOpen), toggleDropdown)
                }
            >
                <p className={s.nav_link}> GENRES </p>
                <FontAwesomeIcon
                    className={s.genres_choose_conteiner_arrow}
                    icon={faArrowDownWideShort}
                    fade
                />
            </div>

            <div
                onMouseLeave={windowWidth >= 851 ? mouseLeaveHandler : null}
                className={`${s.genres_choose_down_container} ${
                    isGenreOpen ? s.genres_choose_down_container_active : ""
                }`}
            >
                <ul className={s.genres_choose_list}>
                    {genrsResults.map((genr, index) => (
                        <li
                            onClick={() => {
                                dispatch(SetChoosedGenres(genr.id));
                            }}
                            key={genr.id}
                            className={`${s.genres_choose_item} ${
                                choosedGenres.includes(genr.id)
                                    ? s.genres_choose_item_active
                                    : ""
                            }`}
                        >
                            {genr.name}
                        </li>
                    ))}
                </ul>
                <div className={s.genres_result_box}>
                    <NavLink
                        to="genre"
                        className={s.genres_result_btn_go}
                        onClick={() => {
                            dispatch(
                                featchGet_ArrOf_Genres([choosedGenres, page])
                            );
                            dispatch(SetGenreOpen(false));
                            dispatch(BurgerSetOpen(false));
                        }}
                    >
                        Go
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default GenreChoose;
