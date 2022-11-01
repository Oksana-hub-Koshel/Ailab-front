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

    const openMenu = () => {
        console.log('open')
        setIsOpen(true);
    }
    return (
        <div>
            <div className="container container--1">

                <nav role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox"/>


                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <a href="#">
                                <li>Home</li>
                            </a>
                            <a href="#">
                                <li>About</li>
                            </a>
                            <a href="#">
                                <li>Info</li>
                            </a>
                            <a href="#">
                                <li>Contact</li>
                            </a>
                            <a href="https://erikterwan.com/" target="_blank" rel="noreferrer">
                                <li>Show me more</li>
                            </a>
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

        </div>


    )
}