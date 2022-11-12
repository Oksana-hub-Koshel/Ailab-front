import s from "./Works.module.scss"
import {FaArrowRight, FaRegHeart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {AiOutlineUser} from "react-icons/ai";


function Works() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        const getWorks = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/portfolio/portfolio-index/')
            setCard(res.data);
        }
        getWorks();

    }, [])
    console.log(card)


    const likeButtonHandler = (id) => {
        setCard(
            card.map((item) => item.id === id ? {...item, like: item.like + 1} : item
            )
        )
    }


    const scrollHandler = (e) => {
        // console.log('scroll')
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    return (
        <div className={s.container}>
            <div className={s.title}>
                <h2>Портфолио</h2>
                <p>Последние выполненные работы для нашего портфолио</p>
            </div>

            <div className={s.blocks}>


                {card.map(item => {
                    return (
                        <div className={s.block} key={item.id}>
                            <Link to={`/info/${item.id}`} state={{from: `${item.id}`}} className={s.card}>
                                <div style={{backgroundImage: `url( ${item.image})`}} className={s.image}></div>
                            </Link>
                            <div className={s.description}>
                                <div className={s.author}>
                                    <AiOutlineUser/>
                                    Ai Lab
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                            <div className={s.card_footer}>
                                <div className={s.app}>
                                    <a href="/">
                                        {item.tags.title}
                                    </a>
                                </div>
                                <div className={s.likes} onClick={() => likeButtonHandler(item.id)}>
                                    <FaRegHeart className={s.icon_heart}/>
                                    <p>{item.like}</p>

                                </div>
                            </div>


                        </div>

                    )
                })}


            </div>
            <div className={s.btn_wrapp}>
                <Link to="/portfolio">посмотреть все работы</Link>
                <i className={s.circle}>
                    <FaArrowRight/>
                </i>


            </div>
        </div>
    )
}

export default Works;