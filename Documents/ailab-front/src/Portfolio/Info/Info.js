import s from "./Info.module.scss";
import {Link} from "react-router-dom";
import {BsClockHistory, BsGrid} from "react-icons/bs";
import {FaRegBookmark} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai"
import {useState} from "react";

export const Info = () => {
    const [state, setState] = (useState([

            {
                image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Scotland",
                category: "app",
                time: "25 октября 2022 г. 16:34",
                description: "cgvhbjnkml",
                likes: 10
            },

        ]
    ))

    const data = [{time: "25 октября 2022 г. 16:34", category: "app",}]


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
                    <h1>Photo</h1>
                </div>
            </div>


            <div className={s.content}>
                <div className={s.left_side}>
                    <div className={s.info}>
                        {data.map(item => {
                            return (
                                <>
                                    <div className={s.info_left}>
                                        <BsClockHistory/>
                                        <div>{item.time}</div>
                                    </div>
                                    <div className={s.info_right}>
                                        <FaRegBookmark/>
                                        <div>{item.category}</div>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                    {state.map(item => {
                        return (
                            <img src={item.image} className={s.foto}/>)
                    })
                    }

                </div>
                {state.map(item => {
                    return (
                        <div className={s.right_side}>
                            <h2>{item.caption}</h2>
                            <div className={s.descrip}>
                                {item.description}
                            </div>
                        </div>
                    )
                })

                }


            </div>
            <div className={s.line_likes}>
                {state.map(item => {
                    return (
                        <>
                            <div></div>
                            <div className={s.likes}>
                                <AiOutlineHeart/>
                                <p>{item.likes}</p>
                            </div>
                        </>
                    )
                })}

            </div>
            <div className={s.btn_catalog}>
                <Link to="/portfolio" className={s.btn_background}>
                    <BsGrid/>
                </Link>
            </div>
        </div>
    )
}