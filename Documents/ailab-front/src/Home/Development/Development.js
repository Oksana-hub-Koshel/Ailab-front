import s from "./Development.module.scss";
import img1 from "./../../Data/HomePage/01.jpg";
import img2 from "./../../Data/HomePage/02.jpg";
import img3 from "./../../Data/HomePage/03.jpg";
import img4 from "./../../Data/HomePage/04.jpg";
import img5 from "./../../Data/HomePage/05.jpg";
import img6 from "./../../Data/HomePage/06.jpg";

export const Development = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2>Разрабатываем цифровые стратегии, продукты,<br/> услуги другие бизнес решения</h2>
                <div className={s.blocks}>
                    <a className={s.block}>
                        <img src={img1}/>
                        <p>Брендирование & Логотипы</p>
                    </a>
                    <a className={s.block}>
                        <img src={img2}/>
                        <p>UI/UX дизайн</p>
                    </a>
                    <a className={s.block}>
                        <img src={img3}/>
                        <p>Front-end разроботка</p>
                    </a>
                    <a className={s.block}>
                        <img src={img4}/>
                        <p>Digital стратегия</p>
                    </a>
                    <a className={s.block}>
                        <img src={img5}/>
                        <p>Back-end разроботка</p>
                    </a>
                    <a className={s.block}>
                        <img src={img6}/>
                        <p>Мобильная разроботка</p>
                    </a>

                </div>
            </div>
        </div>
    )
}