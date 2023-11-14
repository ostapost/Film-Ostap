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

const Burger = ({ isOpen, changeFalse }) => {
    return (
        <div>
            <div
                onClick={changeFalse}
                className={cn(s.cover, { [s.coverShow]: isOpen })}
            ></div>
            <div className={cn(s.mobileBox, { [s.mobileBoxShow]: isOpen })}>
                <div className={s.burger_container}>
                    <div className={s.burger_closes_box}>
                        <div className={s.wrapper_sub_name}>
                            <img
                                className={s.header_logo_img}
                                src="../public/icons8-cinema-96.png"
                                alt="logo"
                            />
                            <p className={s.sub_name}>Ostap Films</p>
                        </div>

                        <FontAwesomeIcon
                            onClick={changeFalse}
                            className={s.burger_closes}
                            icon={faRectangleXmark}
                        />
                    </div>

                    <div className={s.search}>
                        <input
                            className={s.search_input}
                            type="input"
                            required
                        />
                        <label className={s.search_label}>Search Film</label>
                        <FontAwesomeIcon
                            className={s.search_loop}
                            icon={faMagnifyingGlass}
                            bounce
                        />
                    </div>
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
                                <NavLink
                                    to="tv_show"
                                    className={s.nav_link}
                                >
                                    GENRES
                                </NavLink>
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
                    <SideBare />
                </div>
            </div>
        </div>
    );
};

export default Burger;
