import s from "./Order.module.scss";
import hero from "./../../Data/HomePage/hero.png"
import {HiOutlineArrowDown} from "react-icons/hi";


export const Order = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.left_side}>
                    <div className={s.img}>
                        <img src={hero}/>
                    </div>

                </div>
                <div className={s.right_side}>

                    <h1 className={s.title}>
                        Мы лучше в<br/> создании
                    </h1>

                    <p>
                        Проектируем бизнес-процессы, интерфейсы и<br/> техническую архитектуру веб-проектов под<br/>
                        ваши уникальные потребности.<br/> Разрабатываем серверные API:<br/>
                        <span className={s.css_typing}>Django Rest Framework, Django, Laravel, MySQL.</span><br/>
                        Верстаем и программируем интерфейсы:<br/>
                        <span>JavaScript, TypeScript, Vue и React, Next.js.</span>
                    </p>


                    <button className={s.btn_order}>
                        Заказать услугу
                        <i className={s.circle}>
                            <HiOutlineArrowDown/>
                        </i>

                    </button>


                </div>
            </div>
            <div className={s.container2}>
                <div className={s.row}>
                    <div className={s.block_item}>
                        <h5>350+</h5>
                        <p>Завершенных проектов</p>
                        <hr className={s.line}/>

                    </div>
                    <div className={s.block_item}>
                        <h5>92%</h5>
                        <p>Позитывных отзывов</p>
                        <hr className={s.line}/>
                    </div>
                    <div className={s.block_item}>
                        <h5>1446</h5>
                        <p>Готовых кейсов</p>
                        <hr className={s.line}/>
                    </div>
                    <div className={s.block_item}>
                        <h5>28</h5>
                        <p>Количество сотрудников</p>
                        <hr className={s.line}/>
                    </div>
                </div>
            </div>
        </>

    )
}