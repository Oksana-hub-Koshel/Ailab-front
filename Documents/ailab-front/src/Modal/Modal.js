import {useForm} from "react-hook-form";
import {useState} from "react";
import "./Modal.scss";
import {AiOutlineClose} from "react-icons/ai";


export const Modal = ({active, setActive}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [show, setShow] = useState(false)

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm({mode: 'onBlur'});


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

                        <form className="form" autoComplete="off">
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
                                    {...register('telephone', {
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
                                <select    {...register('agree', {required: true})}>
                                    <option value="front">Разработка сайта</option>
                                    <option value="front">Разработка сайта</option>
                                    <option value="front">Разработка сайта</option>
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