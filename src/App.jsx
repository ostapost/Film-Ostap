import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./page/homePage/HomePage";
import NewPage from "./page/newPage";
import UserPage from "./page/userPage/UserPage";
import SideBare from "./smallComponent/side-bare";
import s from "./App.module.css";
import PeoplePage from "./page/peoplePage/PeoplePage";
import SettingsPage from "./page/settingsPage/SettingsPage";
import SliderPage from "./page/sliderPage/SliderPage";
import DownLoadPage from "./page/downloadPage/DownLoadPage";
function App() {
    return (
        <div className={s.wrapper}>
            <Header />
            <main className={s.main}>
                <div className={s.main_container}>
                    <SideBare />
                    <div className={s.main_content}>
                        <Routes>
                            <Route
                                path="/"
                                element={<HomePage />}
                            ></Route>
                            <Route
                                path="new"
                                element={<NewPage />}
                            ></Route>
                            <Route
                                path="user"
                                element={<UserPage />}
                            ></Route>
                            <Route
                                path="people"
                                element={<PeoplePage />}
                            ></Route>
                            <Route
                                path="settings"
                                element={<SettingsPage />}
                            ></Route>
                            <Route
                                path="slider"
                                element={<SliderPage />}
                            ></Route>
                            <Route
                                path="download"
                                element={<DownLoadPage />}
                            ></Route>
                        </Routes>
                    </div>
                </div>
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default App;
