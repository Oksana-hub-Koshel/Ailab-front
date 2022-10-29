import styles from "./Footer.module.scss";
import {NavLink} from "react-router-dom";
import {FaTelegram} from "react-icons/fa";
import {BsTelephoneInbound} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {IoIosArrowForward} from "react-icons/io"

export const Footer = () => {
    return (

        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.first_block}>
                        <div className={styles.logo}>
                            {/*<img src={logo} className={styles.logo_image}/>*/}
                        </div>
                        <div className={styles.text}>
                            <p>
                                Our Squad of Attorneys are always here to provide<br></br> you
                                the best and efficient service
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
                            <h3>Sevices</h3>
                        </div>
                        <div className={styles.services_links}>
                            <div className={styles.links_items}>
                                <IoIosArrowForward/>
                                <span>Development</span>
                            </div>

                            <div className={styles.links_items}>
                                <IoIosArrowForward/>
                                <span>Development</span>
                            </div>

                            <div className={styles.links_items}>
                                <IoIosArrowForward/>
                                <span>Development</span>
                            </div>

                            <div className={styles.links_items}>
                                <IoIosArrowForward/>
                                <span>Development</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.third_block}>
                        <div>
                            <h3>Quick Links</h3>
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
                        <h3>Find Me</h3>

                        <div className={styles.contacts_links}>
                            <div className={styles.phone_icon_and_text}>
                                <BsTelephoneInbound/>
                                <a>+380976542291</a>
                            </div>

                            <div className={styles.insta_icon_and_text}>
                                <FiFacebook/>
                                <a>ailab</a>
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


    )
}