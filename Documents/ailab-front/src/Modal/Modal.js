import {useForm} from "react-hook-form";
import "./Modal.scss";
import {AiOutlineClose} from "react-icons/ai";
import axios from "axios";


export const Modal = ({active, setActive}) => {

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm({mode: 'onBlur'});

    const handleData = (e) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/index/contact/',
            headers: {},
            data: {
                fio: e.username,
                phone: e.phone,
                message: e.description,
                category: e.category
            },
        }).then(() => {
            setActive(false);
        });

    }


    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className={active ? 'modal_content active' : 'modal_content'}
                onClick={e => e.stopPropagation()}>

                <div className="cross_block">
                    <h1 className="text_modal">
                        Форма обратной связи
                    </h1>
                    <AiOutlineClose onClick={() => setActive(false)} className="cross"/>
                </div>
                <div className="content_window">
                    <div className="left_side">

                        <form className="form" autoComplete="off" onSubmit={handleSubmit(handleData)}>
                            <div className="inp_input1">
                                <label className="label">ФИО</label>
                                <input
                                    className="inp_field1"
                                    {...register('username', {
                                        required: 'Поле обязательно',
                                    })}
                                />
                                <div className="error">{errors?.username?.message}</div>
                            </div>
                            <div className="inp_input1">
                                <label className="label">Номер телефона</label>
                                <input
                                    className="inp_field1"
                                    {...register('phone', {
                                        required: 'Поле обязательно',
                                    })}
                                />
                                <div className="error">{errors?.telephone?.message}</div>
                            </div>
                            <div className="inp_input1">
                                <label className="label">Описание</label>
                                <textarea
                                    className="inp_text"
                                    {...register('description')}
                                />

                            </div>


                            <div className="conditions">
                                <select    {...register('category', {required: true})}>
                                    <option value="web-develop">Разработка сайта</option>
                                    <option value="back-develop">Разработка сайта</option>
                                    <option value="design">Разработка сайта</option>
                                </select>


                            </div>
                            <button className="send" type="submit">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};