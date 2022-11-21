import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BsClockHistory, BsGrid} from "react-icons/bs";
import {FaRegBookmark} from "react-icons/fa";
import s from "./Info.module.scss";
import {AiOutlineHeart} from "react-icons/ai";


export const Info = (props) => {
    const [state, setState] = useState(null);
    const location = useLocation();
    const {from} = location.state;

    console.log(state)
    useEffect(() => {
        if (from) {
            axios.get(`http://127.0.0.1:8000/api/portfolio/portfolio/${from}`).then((response) => {
                setState(response.data);
            });
        }
    }, [from]);


    return (

        <div className={s.container}>
            <div className={s.title}>
                {state && (
                    <div className={s.title_center}>
                        <div>
                            <div className={s.breadcrump}>
                                <div><Link to="/">Главная</Link></div>
                                <div>/</div>
                                <div><Link to="/portfolio">Портфолио</Link></div>
                                <div>/</div>
                                <div><Link>{state.title}</Link></div>
                            </div>
                        </div>

                        <h1>{state.title}</h1>
                    </div>
                )}
            </div>

            <div className={s.content}>
                {state && (
                    <>
                        <div className={s.left_side}>

                            <div className={s.info}>
                                <div className={s.info_left}>
                                    <BsClockHistory/>
                                    <div className={s.data}>{state.date}</div>
                                </div>
                                <div className={s.info_right}>
                                    <FaRegBookmark/>
                                    <div>{state.views}</div>

                                </div>
                            </div>
                            <div>
                                <img src={state.image} className={s.foto}/>
                            </div>
                        </div>
                        <div className={s.right_side}>
                            <h2>{state.title}</h2>
                            {state.content.map(elem => {
                                return (
                                    <div className={s.descrip} dangerouslySetInnerHTML={{__html: elem.description}}/>
                                )

                            })}


                        </div>
                    </>
                )}


            </div>
            {state && (
                <>

                    <div className={s.line_likes}>
                        <div></div>
                        <div className={s.likes}><AiOutlineHeart/><p>{state.likes}</p></div>
                    </div>


                    <div className={s.btn_catalog}>
                        <Link to="/portfolio" className={s.btn_background}><BsGrid/></Link>
                    </div>
                </>
            )}

        </div>

    )
}









