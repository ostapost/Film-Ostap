import s from "./Header.module.css";

import { useEffect, useState } from "react";
import SmallNavigation from "../../smallComponent/smallNavigation";
import Burger from "../../smallComponent/burger/Burger";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log(windowWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function changeFalse() {
        setIsOpen(false);
    }
    return (
        <section className={s.header}>
            <div className={s.header_container}>
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
                {windowWidth >= 851 ? (
                    <>
                        <SmallNavigation />
                    </>
                ) : (
                    <button onClick={() => setIsOpen(true)}>BURGER</button>
                )}
            </div>
            <Burger
                isOpen={isOpen}
                changeFalse={changeFalse}
            />
        </section>
    );
};

export default Header;