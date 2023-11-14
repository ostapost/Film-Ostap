import s from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={s.home_container}>
            <div className={s.home_background_box}>
                <img
                    className={s.home_background_img}
                    src=""
                    alt=""
                />
                <div className={s.home_content}>
                    <h1 className={s.home_content_title}></h1>
                    <p className={s.home_content_describe}></p>
                    <div className={s.home_content_genres}></div>
                    <div className={s.home_content_block_btns}>
                        <button className={s.home_content_btn_watch}></button>
                        <button className={s.home_content_btn_mylist}></button>
                    </div>
                    <div className={s.home_content_block_rates}>
                        <button className={s.home_content_block_rates}></button>
                    </div>
                </div>
            </div>

            <h1>Home</h1>
        </div>
    );
};

export default HomePage;
