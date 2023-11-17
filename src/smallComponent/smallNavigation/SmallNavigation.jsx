import { NavLink } from "react-router-dom";
import s from "./SmallNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDownWideShort,
    faCircleUser,
    faMagnifyingGlass,
    faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import SearchList from "../searchList/SearchList";
import { useDispatch, useSelector } from "react-redux";
import { GetQuerty, SetOpen, featchGetSearch } from "../../store/SearchSlice";
import { useEffect } from "react";
import GenreChoose from "../genreChoose/GenreChoose";

const SmallNavigation = () => {
    const dispatch = useDispatch();
    const { searchList, query } = useSelector((state) => state.search);
    useEffect(() => {
        setTimeout(() => {
            dispatch(featchGetSearch(query));
        }, 500);
    }, [query]);
    const handleClick = () => {
        setTimeout(() => {
            dispatch(SetOpen(false));
        }, 150);
    };
    return (
        <>
            <nav className={s.navigation}>
                <ul className={s.nav_list}>
                    <li className={s.nav_item}>
                        <NavLink
                            to="/"
                            className={s.nav_link}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <GenreChoose />
                    </li>
                    <li className={s.nav_item}>
                        <NavLink
                            to="movies"
                            className={s.nav_link}
                        >
                            MOVIES
                        </NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <NavLink
                            to="new"
                            className={s.nav_link}
                        >
                            NEW
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.search}>
                <input
                    className={s.search_input}
                    type="input"
                    required
                    value={query}
                    onInput={(e) => {
                        dispatch(SetOpen(e.target.value));
                        dispatch(GetQuerty(e.target.value));
                    }}
                    onBlur={handleClick}
                />
                <label className={s.search_label}>Search Film</label>
                <FontAwesomeIcon
                    className={s.search_loop}
                    icon={faMagnifyingGlass}
                    bounce
                />
                <SearchList searchList={searchList} />
            </div>
            <div className={s.other_nav_fich}>
                <div className={s.header_fich_btns}>
                    <NavLink to="collaction">
                        <FontAwesomeIcon
                            className={s.fich_collection}
                            icon={faPhotoFilm}
                        />
                    </NavLink>
                    <NavLink to="user">
                        <FontAwesomeIcon
                            className={s.fich_user}
                            icon={faCircleUser}
                        />
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default SmallNavigation;
