import s from "./Poster.module.css";
const Poster = ({ movie }) => {
    // console.log(movie);
    return (
        <>
            <div className={s.poster_conatiner}>
                <img
                    className={s.poster_img}
                    src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                    alt=""
                />
                <div className={s.poster_information_block}>
                    <p className={s.poster_title}>{movie.title}</p>
                    <p className={s.poster_date}>{movie.release_date}</p>
                    <div className={s.poster_rate_block}>
                        <img
                            src="../../../public/image 3.png"
                            alt=""
                        />
                        <p className={s.poster_rate}>{movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Poster;
