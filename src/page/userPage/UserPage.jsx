import { useForm } from "react-hook-form";
import s from "./UserPage.module.css";

const UserPage = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };
    return (
        <div className={s.user_container}>
            <div className={s.user_content}>
                <p className={s.user_regestration}>Вхід / Реєстрація</p>
                <form
                    name="ostap"
                    method="post"
                    // netlify-honeypot="bot-field"
                    // data-netlify="true"
                    className={s.user_form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="hidden"
                        name="form-name"
                        value="ostap"
                    />
                    <label className={s.user_label}>
                        <div className={s.user_label_container}>
                            <p className={s.user_name}>FirstName :</p>
                            <input
                                name="FirstName"
                                className={s.user_input}
                                type="text"
                                {...register("FirstName", {
                                    required: "Заповніть поле FirstName ",
                                    minLength: {
                                        value: 5,
                                        message: "Мінімум 5 букв",
                                    },
                                })}
                            />
                        </div>
                    </label>
                    <div className={s.user_error_message}>
                        {errors?.FirstName && errors.FirstName.message}
                    </div>

                    <label className={s.user_label}>
                        <div className={s.user_label_container}>
                            <p className={s.user_name}>Email :</p>
                            <input
                                className={s.user_input}
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: "Заповніть поле Email ",
                                    minLength: {
                                        value: 5,
                                        message: "Мінімум 5 букв",
                                    },
                                })}
                            />
                        </div>
                    </label>
                    <div className={s.user_error_message}>
                        {errors?.SecondtName && errors.SecondtName.message}
                    </div>

                    <label className={s.user_label}>
                        <div className={s.user_label_container}>
                            <p className={s.user_name}>Password :</p>
                            <input
                                className={s.user_input}
                                type="password"
                                name="password"
                                required
                                {...register("Password", {
                                    required: "Заповніть поле Password ",
                                    minLength: {
                                        value: 5,
                                        message: "Мінімум 5 символів",
                                    },
                                })}
                            />
                        </div>
                    </label>
                    <div className={s.user_error_message}>
                        {errors?.SecondtName && errors.SecondtName.message}
                    </div>

                    <input
                        className={s.user_btn_submit}
                        type="submit"
                        disabled={!isValid}
                    />
                </form>
            </div>
        </div>
    );
};

export default UserPage;
