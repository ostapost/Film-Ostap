import { useEffect } from "react";
import MySwiper from "../../smallComponent/swiper/MySwiper";
import s from "./HomePage.module.css";
import {
    featchGetPopularMovie,
    featchGetPopularPerson,
    featchGetPopularTV,
} from "../../store/PopularSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();
    const { whenArr, whoArr, popularMovie, popularPerson, popularTv } =
        useSelector((state) => state.popular);
    useEffect(() => {
        dispatch(featchGetPopularMovie([whoArr[0], whenArr[0]]));
        dispatch(featchGetPopularPerson([whoArr[1], whenArr[0]]));
        dispatch(featchGetPopularTV([whoArr[2], whenArr[0]]));
    }, [whenArr]);
    return (
        <div className={s.home_container}>
            <MySwiper
                popularMovie={popularMovie}
                num={1}
                path="poster_path"
                title={"Movies"}
            />
            <MySwiper
                popularMovie={popularPerson}
                num={2}
                path="profile_path"
                title={"People"}
            />
            <MySwiper
                popularMovie={popularTv}
                num={3}
                path="poster_path"
                title={"TV Serials"}
            />
        </div>
    );
};

export default HomePage;
