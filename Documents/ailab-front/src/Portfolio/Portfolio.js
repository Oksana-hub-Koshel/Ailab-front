import s from "./Portfolio.module.scss";
import {Link} from "react-router-dom";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai";


export const Portfolio = () => {
    const data = [

        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "London",
            category: "app",
            likes: 10
        },
        {
            image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "San Francisco",
            category: "app",
            likes: 4
        },
        {
            image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=pexels-pixabay-33688.jpg&fm=jpg&_gl=1*9jrolq*_ga*ODczNzc5NDg3LjE2NjY2MDI5NDc.*_ga_8JE65Q40S6*MTY2NjYwMjk1MS4xLjEuMTY2NjYwNDAzMi4wLjAuMA.",
            caption: "Amsterdam",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv",
            category: "app",
            likes: 510
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv",
            category: "app",
            likes: 5
        }
    ]
    return (
        <div className={s.container}>
            <div className={s.title}>
                <div className={s.title_center}>
                    <div>
                        <div className={s.breadcrump}>
                            <div><Link to="/">Главная</Link></div>
                            <div>/</div>
                            <div><Link to="/portfolio">Портфолио</Link></div>
                        </div>
                    </div>
                    <h1>наши работы</h1>
                </div>
            </div>
            <div className={s.list}>
                <div className={s.item}>
                    <a>все</a>
                    <sup>1</sup>
                </div>
                <div className={s.item}>
                    <a>app</a>
                    <sup>1</sup>
                </div>
            </div>
            <div className={s.wrapp_works}>
                {data.map(item => {
                    return (
                        <div className={s.card}>
                            <img src={item.image}/>
                            <div className={s.card_body}>
                                <div className={s.portfolio_meta}>
                                    <div className={s.author}>
                                        <AiOutlineUser/>
                                        Ai Lab
                                    </div>
                                    <div className={s.likes}>
                                        <AiOutlineHeart className={s.heart_icon}/>
                                        {item.likes}
                                    </div>
                                </div>
                                <div className={s.card_title}>{item.caption}</div>
                                <div className={s.item_category}>
                                    <a>{item.category}</a>
                                </div>
                            </div>


                        </div>
                    )
                })}

            </div>

        </div>
    )
}
