import s from "./Header.module.scss";
import "./Header.scss";
import logo from "./../Data/Header/logo-dark.svg";
import {FaRegHandPeace, FaTelegramPlane} from "react-icons/fa";
import {Modal} from "../Modal/Modal";
import {useState} from "react";
import {Link} from "react-router-dom";


export const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="container container--1">

                <nav role="navigation" className={s.nav}>
                    <div id="menuToggle">

                        <input type="checkbox"/>


                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <Link to="/">
                                <li>Главная</li>
                            </Link>
                            <Link to="/portfolio">
                                <li>Портфолио</li>
                            </Link>
                            <Link to="/cases">
                                <li>Кейсы</li>
                            </Link>
                            <Link to="/blog">
                                <li>Блог</li>
                            </Link>

                        </ul>
                    </div>
                </nav>

                <div className={s.logo}>
                    <a href="/">
                        <img src={logo}/>
                    </a>


                </div>
                <div className={s.menu_item}>
                    <Link to="/" className="text text--1">
                        Главная
                    </Link>
                    <Link to="/portfolio" className="text text--2">
                        Портфолио
                    </Link>
                    <Link to="/cases" className="text text--3">
                        Кейсы
                    </Link>
                    <Link to="/blog" className="text text--4">
                        Блог
                    </Link>
                    <Link to="/" className="text text--4">
                        <FaTelegramPlane className={s.teleg}/>
                        telegram
                    </Link>
                    <Link to="/" className="text text--4">
                        <FaRegHandPeace className={s.peace}/>
                        kwork
                    </Link>

                </div>


                <div className={s.btn}>
                    <div><FaTelegramPlane className={s.teleg_icon}/></div>
                    <a onClick={() => setModalActive(true)}>связаться с нами</a>

                </div>


                {/*<FiMenu onClick={openMenu} className={s.icon_menu}/>*/}
            </div>


            {/*{isOpen &&*/}
            {/*    <div className={s.hidden_menu}>*/}
            {/*        <ul>*/}
            {/*            <li>Главная</li>*/}
            {/*            <li>Контакты</li>*/}
            {/*            <li>О нас</li>*/}
            {/*        </ul>*/}
            {/*        <AiOutlineClose onClick={() => setIsOpen(false)} className={s.cross}/>*/}
            {/*    </div>}*/}


            <Modal active={modalActive} setActive={setModalActive}/>

        </>


    )
}