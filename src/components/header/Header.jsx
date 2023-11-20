import s from "./Header.module.css";

import { useEffect, useState } from "react";
import SmallNavigation from "../../smallComponent/smallNavigation";
import Burger from "../../smallComponent/burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import { SetWindowWidth } from "../../store/FilmSlice";
import { BurgerSetOpen } from "../../store/SearchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
    let dispatch = useDispatch();
    const { burgerOpen } = useSelector((state) => state.search);
    const { windowWidth } = useSelector((state) => state.movies);
    useEffect(() => {
        const handleResize = () => {
            dispatch(SetWindowWidth(window.innerWidth));
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const toggleBurger = () => {
        document.body.style.overflow = burgerOpen ? "auto" : "hidden";
    };

    return (
        <section className={s.header}>
            <div className={s.header_container}>
                <NavLink to="/">
                    <div className={s.header_logo}>
                        <img
                            className={s.header_logo_img}
                            src="../public/icons8-cinema-96.png"
                            alt="logo"
                        />
                        {windowWidth >= 851 ? (
                            <></>
                        ) : (
                            <p className={s.sub_name}>Ostap Films</p>
                        )}
                    </div>
                </NavLink>
                {windowWidth >= 851 ? (
                    <>
                        <SmallNavigation />
                    </>
                ) : (
                    <FontAwesomeIcon
                        className={s.header_burger}
                        icon={faBars}
                        onClick={
                            () => dispatch(BurgerSetOpen(true))
                            // toggleBurger()
                        }
                    />
                )}
            </div>
            <Burger />
        </section>
    );
};

export default Header;
