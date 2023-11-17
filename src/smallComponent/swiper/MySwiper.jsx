import "./Swiper.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
const MySwiper = ({ popularMovie, num, path, title }) => {
    const { windowWidth } = useSelector((state) => state.movies);

    return (
        <div className="swiper_LARGE_container">
            <div className="swiper_container">
                <h1 className="swiper_title">Popular : {title}</h1>
                <div className={`swiper-button-prev${num}`}>
                    <FontAwesomeIcon
                        className="swiper_arrow"
                        icon={faAngleLeft}
                    />
                </div>
                <div className="swiper_inner_box">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={20}
                        slidesPerView={
                            windowWidth <= 411
                                ? 1
                                : windowWidth <= 671
                                ? 2
                                : windowWidth <= 1011
                                ? 3
                                : windowWidth <= 1211
                                ? 4
                                : 5
                        }
                        navigation={{
                            nextEl: `.swiper-button-next${num}`,
                            prevEl: `.swiper-button-prev${num}`,
                            clickable: true,
                        }}
                        pagination={{
                            el: `.swiper_pagination${num}`,
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log("slide change")}
                        // onReachEnd={() => {
                        //     "end";
                        // }}
                    >
                        {popularMovie.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    className="swiper_img"
                                    src={`https://image.tmdb.org/t/p/w500${item[path]}`}
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={`swiper-button-next${num}`}>
                    <FontAwesomeIcon
                        className="swiper_arrow"
                        icon={faAngleLeft}
                        rotation={180}
                    />
                </div>
            </div>
            <div className="swiper_pagination_container">
                <div className={`swiper_pagination${num}`}></div>
            </div>
        </div>
    );
};

export default MySwiper;
