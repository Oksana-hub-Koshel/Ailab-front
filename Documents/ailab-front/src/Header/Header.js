import s from "./Header.module.scss";
import logo from "./../Data/Header/logo-dark.svg";
import {Link} from "react-router-dom";
import {FaRegHandPeace, FaTelegramPlane} from "react-icons/fa";
import {Modal} from "../Modal/Modal";
import {useState} from "react";


export const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    return (

        <div className={s.navbar_wrapper}>
            <div className={s.container}>
                <div className={s.logo}>
                    <a href="/">
                        <img src={logo}/>
                    </a>

                </div>
                <div className={s.navbar_items}>
                    <div className={s.items}>
                        <Link to="/">Главная</Link>
                        <Link to="/portfolio">Портфолио</Link>
                        <Link to="/cases">Кейсы</Link>
                        <Link to="/blog">Блог</Link>
                        <Link to="/">
                            <FaTelegramPlane className={s.teleg}/>
                            telegram
                        </Link>
                        <Link to="/">
                            <FaRegHandPeace className={s.peace}/>
                            kwork
                        </Link>
                    </div>
                    <div className={s.btn}>
                        <div>
                            <FaTelegramPlane className={s.teleg_icon}/></div>
                        <a onClick={() => setModalActive(true)}>связаться с нами</a>

                    </div>
                    <Modal active={modalActive} setActive={setModalActive}/>
                </div>
            </div>
        </div>

    )
}