import styles from "./Footer.module.scss";
import {NavLink} from "react-router-dom";
import {FaTelegram} from "react-icons/fa";
import {BsTelephoneInbound} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {IoIosArrowForward} from "react-icons/io";
import logo from "./../Data/Header/logo-dark.svg";

export const Footer = () => {
    return (

        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.first_and_second_blocks}>
                        <div className={styles.first_block}>
                            <div className={styles.logo}>
                                <img src={logo} className={styles.logo_image}/>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Цифровые стратегии, продукты,<br/> услуги и другие бизнесрешения
                                </p>
                            </div>
                            <div className={styles.icons_contacts}>
                                <FaTelegram/>
                                <BsTelephoneInbound/>
                                <FiFacebook/>
                            </div>
                        </div>

                        <div className={styles.second_block}>
                            <div className={styles.services_block}>
                                <h3>Сервисы</h3>
                            </div>
                            <div className={styles.services_links}>
                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <span>Front-end разроботка</span>
                                </div>

                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <span>Back-end разроботка</span>
                                </div>

                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <span>Мобильная разроботка</span>
                                </div>

                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <span>Брендирование & Логотипы</span>
                                </div>
                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <span>UI /UX дизайн</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.third_and_fourth_blocks}>
                        <div className={styles.third_block}>
                            <div>
                                <h3>Линки</h3>
                            </div>

                            <div className={styles.quick_links}>
                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <NavLink to="/">Главная</NavLink>
                                </div>
                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <NavLink to="/portfolio">Портфолио</NavLink>
                                </div>

                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <NavLink to="/cases">Кейсы</NavLink>
                                </div>

                                <div className={styles.links_items}>
                                    <IoIosArrowForward/>
                                    <NavLink to="/blog">Блог</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className={styles.fourth_block}>
                            <h3>Контакты</h3>

                            <div className={styles.contacts_links}>
                                <div className={styles.phone_icon_and_text}>
                                    <BsTelephoneInbound/>
                                    <a>+380976542291</a>
                                </div>

                                <div className={styles.insta_icon_and_text}>
                                    <FiFacebook/>
                                    <a>AiLab</a>
                                </div>

                                <div className={styles.email_icon_and_text}>
                                    <TfiEmail/>
                                    <a>ailab@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}