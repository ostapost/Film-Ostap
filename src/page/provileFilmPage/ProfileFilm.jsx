import { useParams } from "react-router-dom";
import s from "./ProfileFilm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { featchGetId } from "../../store/IdFilmSlice";

const ProfileFilm = () => {
    let { IdMoviesPerson } = useSelector((state) => state.idFilm);
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        dispatch(featchGetId(id));
    }, [id]);
    console.log(IdMoviesPerson);
    return (
        <>
            {IdMoviesPerson ? (
                <div className={s.profile_container}>
                    <img
                        className={s.profile_container_img}
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            IdMoviesPerson.backdrop_path
                        }
                        alt=""
                    />

                    <div className={s.profile_wrapper_content}>
                        <div className={s.profile_content_img}>
                            <img
                                src={
                                    "https://image.tmdb.org/t/p/w500" +
                                    IdMoviesPerson.poster_path
                                }
                                alt=""
                            />
                        </div>
                        <div className={s.profile_content}>
                            <h1 className={s.profile_title}>
                                {IdMoviesPerson.title}
                            </h1>
                            <p className={s.profile_overview}>
                                {IdMoviesPerson.overview}
                            </p>
                            <p className={s.profile_tagline}>
                                {IdMoviesPerson.tagline}
                            </p>
                            <div className={s.profile_rates_box}>
                                <p className={s.profile_vote_average}>
                                    rate : {IdMoviesPerson.vote_average}
                                </p>
                                <p className={s.profile_release_date}>
                                    data : {IdMoviesPerson.release_date}
                                </p>
                                <p className={s.profile_runtime}>
                                    time : {IdMoviesPerson.runtime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
};

export default ProfileFilm;
