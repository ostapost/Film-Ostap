import { NavLink } from "react-router-dom";
import s from "./SideBare.module.css";
import {
    faDownload,
    faGears,
    faSliders,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetOpen } from "../../store/ForOpenSlice";
import { useDispatch } from "react-redux";

const SideBare = () => {
    const dispatch = useDispatch();
    return (
        <div className={s.sidebare_container}>
            <ul className={s.sidebare_list}>
                <li className={s.sidebare_item}>
                    <NavLink
                        to="people"
                        className={s.sidebare_link}
                        onClick={() => {
                            dispatch(SetOpen());
                        }}
                    >
                        <FontAwesomeIcon
                            className={s.sidebare_people}
                            icon={faUsers}
                        />
                    </NavLink>
                </li>
                <li className={s.sidebare_item}>
                    <NavLink
                        onClick={() => {
                            dispatch(SetOpen());
                        }}
                        to="slider"
                        className={s.sidebare_link}
                    >
                        <FontAwesomeIcon
                            icon={faSliders}
                            className={s.sidebare_slider}
                        />
                    </NavLink>
                </li>
                <li className={s.sidebare_item}>
                    <NavLink
                        onClick={() => {
                            dispatch(SetOpen());
                        }}
                        to="download"
                        className={s.sidebare_link}
                    >
                        <FontAwesomeIcon
                            icon={faDownload}
                            className={s.sidebare_download}
                        />
                    </NavLink>
                </li>
                <li className={s.sidebare_item}>
                    <NavLink
                        onClick={() => {
                            dispatch(SetOpen());
                        }}
                        to="settings"
                        className={s.sidebare_link}
                    >
                        <FontAwesomeIcon
                            icon={faGears}
                            className={s.sidebare_settings}
                        />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBare;
