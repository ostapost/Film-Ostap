import { Route, Routes } from "react-router-dom";
import s from "./Popup.module.css";
import PeoplePage from "../../page/peoplePage/PeoplePage";
import SettingsPage from "../../page/settingsPage/SettingsPage";
import DownLoadPage from "../../page/downloadPage/DownLoadPage";
import { RemoveOpen } from "../../store/ForOpenSlice";
import { useDispatch } from "react-redux";

const Popup = () => {
    const dispatch = useDispatch();
    return (
        <div className={s.popup_conatiner}>
            <div
                className={s.popup_cover}
                onClick={() => {
                    dispatch(RemoveOpen());
                }}
            ></div>
            <div className={s.popup_main_conatent}>
                <Routes>
                    <Route
                        path="people"
                        element={<PeoplePage />}
                    ></Route>
                    <Route
                        path="settings"
                        element={<SettingsPage />}
                    ></Route>
                    <Route
                        path="download"
                        element={<DownLoadPage />}
                    ></Route>
                </Routes>
                POPUP
            </div>
        </div>
    );
};

export default Popup;
