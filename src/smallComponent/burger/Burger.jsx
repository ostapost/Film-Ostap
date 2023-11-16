import cn from "classnames";
import SmallNavigation from "../smallNavigation/SmallNavigation";
import s from "./Burger.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faMagnifyingGlass,
    faPhotoFilm,
    faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import SideBare from "../side-bare";
import SearchList from "../searchList/SearchList";
import { useDispatch, useSelector } from "react-redux";
import {
    BurgerSetOpen,
    GetQuerty,
    SetOpen,
    featchGetSearch,
} from "../../store/SearchSlice";
import { useEffect } from "react";

const Burger = ({ isOpen, changeFalse }) => {
    const dispatch = useDispatch();
    const { searchList, query, burgerOpen } = useSelector(
        (state) => state.search
    );
    console.log(burgerOpen);
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
        <div>
            <div
                onClick={() => dispatch(BurgerSetOpen(false))}
                className={cn(s.cover, { [s.coverShow]: burgerOpen })}
            ></div>
            <div className={cn(s.mobileBox, { [s.mobileBoxShow]: burgerOpen })}>
                <div className={s.burger_container}>
                    <div className={s.burger_closes_box}>
                        <div className={s.wrapper_sub_name}>
                            <NavLink
                                to="/"
                                className={s.nav_link}
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <img
                                    className={s.header_logo_img}
                                    src="../public/icons8-cinema-96.png"
                                    alt="logo"
                                />
                            </NavLink>
                            <p className={s.sub_name}>Ostap Films</p>
                        </div>

                        <FontAwesomeIcon
                            onClick={() => dispatch(BurgerSetOpen(false))}
                            className={s.burger_closes}
                            icon={faRectangleXmark}
                        />
                    </div>

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
                        <SearchList
                            // changeFalse={changeFalse}
                            searchList={searchList}
                        />
                    </div>
                    <nav className={s.navigation}>
                        <ul className={s.nav_list}>
                            <li
                                className={s.nav_item}
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <NavLink
                                    to="/"
                                    className={s.nav_link}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li
                                className={s.nav_item}
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <NavLink
                                    to="tv_show"
                                    className={s.nav_link}
                                >
                                    GENRES
                                </NavLink>
                            </li>
                            <li
                                className={s.nav_item}
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <NavLink
                                    to="movies"
                                    className={s.nav_link}
                                >
                                    MOVIES
                                </NavLink>
                            </li>
                            <li
                                className={s.nav_item}
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <NavLink
                                    to="new"
                                    className={s.nav_link}
                                >
                                    NEW
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.other_nav_fich}>
                        <div className={s.header_fich_btns}>
                            <NavLink
                                to="collaction"
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <FontAwesomeIcon
                                    className={s.fich_collection}
                                    icon={faPhotoFilm}
                                />
                            </NavLink>
                            <NavLink
                                to="user"
                                onClick={() => dispatch(BurgerSetOpen(false))}
                            >
                                <FontAwesomeIcon
                                    className={s.fich_user}
                                    icon={faCircleUser}
                                />
                            </NavLink>
                        </div>
                    </div>
                    <SideBare />
                </div>
            </div>
        </div>
    );
};

export default Burger;
