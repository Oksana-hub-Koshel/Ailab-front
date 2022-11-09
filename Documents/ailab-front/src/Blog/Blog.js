import s from "./Blog.module.scss";
import {Link} from "react-router-dom";
import {BsClockHistory} from "react-icons/bs"
import {useEffect, useState} from "react";
import axios from "axios";


export const Blog = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/').then(response => {
            setInfo(response.data);
        });

    }, []);


    return (
        <div className={s.container}>
            <div className={s.title}>
                <div className={s.title_center}>
                    <div>
                        <div className={s.breadcrump}>
                            <div><Link to="/">Главная</Link></div>
                            <div>/</div>
                            <div><Link to="/blog">Блог</Link></div>
                        </div>
                    </div>
                    <h1>Блог</h1>
                </div>
            </div>

            <div className={s.content}>

                {info.map(item => {
                    return (
                        <>
                            <div className={s.item1}>
                                <div className={s.card}>
                                    <a className={s.image_block}>
                                        <div style={{backgroundImage: `url( ${item.image})`}} className={s.image}></div>

                                    </a>
                                    <div className={s.card_body}>
                                        <h5 className={s.card_title}>
                                            <a>{item.title}</a>
                                        </h5>
                                        <p className={s.descrip} dangerouslySetInnerHTML={{__html: item.text}}/>
                                        <div className={s.tag_links}>
                                            <a className={s.tag_link}>{item.tags}</a>

                                        </div>

                                    </div>
                                    <div className={s.card_footer}>
                                        <a className={s.left_side}>
                                            <img className={s.author_foto} src={item.author.image}/>
                                            <div className={s.author_name}>{item.author.name}</div>
                                        </a>
                                        <div className={s.post_meta}>
                                            <a>
                                                {/*<BiMessage/>*/}
                                                {/*{item.comment}*/}
                                            </a>
                                            <span>
                                    <BsClockHistory/>
                                                {item.date}
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}


            </div>
        </div>
    )
}
