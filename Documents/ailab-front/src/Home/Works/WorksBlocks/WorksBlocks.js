import s from "../Works.module.scss";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import {FaRegHeart} from "react-icons/fa";
import {useState} from "react";

export const WorksBlocks = ({id, image, title, category, likes, likeButtonHandler}) => {
    const [pressLike, setPressLike] = useState(true)
    return (
        <div className={s.block} key={id}>
            <Link to={`/info/${id}`} state={{from: `${id}`}} className={s.card}>
                <div style={{backgroundImage: `url( ${image})`}} className={s.image}></div>
            </Link>
            <div className={s.description}>
                <div className={s.author}>
                    <AiOutlineUser/>
                    Ai Lab
                </div>
                <h3>{title}</h3>
            </div>
            <div className={s.card_footer}>
                <div className={s.app}>
                    <a href="/">
                        {category}
                    </a>
                </div>
                <div className={s.likes} onClick={() => likeButtonHandler(id, pressLike)}>
                    <FaRegHeart onClick={() => setPressLike(!pressLike)}
                                className={!pressLike ? s.heart_icon_press : s.heart_icon}/>
                    <p>{likes}</p>

                </div>
            </div>


        </div>
    )
}