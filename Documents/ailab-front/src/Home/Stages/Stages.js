import s from "./Stages.module.scss";
import image1 from "./../../Data/HomePage/user-data.svg"
import image4 from "./../../Data/HomePage/user-data.svg"
import image3 from "./../../Data/HomePage/ui-design.svg"
import image2 from "./../../Data/HomePage/coding.svg"

export const Stages = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.wrapp_block}>
                    <h2>Разбор этапов разработки</h2>
                    <div className={s.stages}>
                        <div className={s.stage}>
                            <div className={s.stage_block}>
                                <div className={s.step_number}>1</div>
                                <div className={s.step_icon}>
                                    <img src={image1}/>
                                </div>
                                <h3>Сбор пользовательских данных</h3>
                                <p>Собираем от клиента данные, составляем техническое задание, и согласование этапов
                                    разработки</p>
                            </div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.stage_block}>
                                <div className={s.step_number}>2</div>
                                <div className={s.step_icon}>
                                    <img src={image2}/>
                                </div>
                                <h3>Прототипирование<br/>(Wireframes)</h3>
                                <p>Создание прототипа, макета и согласование Front-end части с заказчиком.</p>
                            </div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.stage_block}>
                                <div className={s.step_number}>3</div>
                                <div className={s.step_icon}>
                                    <img src={image3}/>
                                </div>
                                <h3>Идеальный до пикселя пользовательский интерфейс</h3>
                                <p>Создаем верстку из прототипа, идеальный до пикселя, строго по техническому
                                    заданию.</p>
                            </div>
                        </div>
                        <div className={s.stage}>
                            <div className={s.stage_block}>
                                <div className={s.step_number}>4</div>
                                <div className={s.step_icon}>
                                    <img src={image4}/>
                                </div>
                                <h3>Разроботка<br/>(программирование)</h3>
                                <p>Разработка функционала строго по техническому заданию, на разных framework-ах.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}