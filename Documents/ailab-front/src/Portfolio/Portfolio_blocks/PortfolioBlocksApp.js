import s from "../Portfolio.module.scss";
import "../portfolio.scss";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";

export const PortfolioBlocksApp = ({likeButtonHandler, id, image, likes, title, category}) => {
    const [pressLike, setPressLike] = useState(false);
    return (

        <div className={s.card_with_body} key={id}>
            <Link to={`/info/${id}`} state={{from: `${id}`}} className={s.card}
                  key={id}>
                <div style={{backgroundImage: `url( ${image})`}}
                     className={s.image}></div>
            </Link>

            <div className={s.card_body}>
                <div className={s.portfolio_meta}>
                    <div className={s.author}>
                        <AiOutlineUser/>
                        Ai Lab
                    </div>

                    <div className={s.likes} onClick={() => likeButtonHandler(id, pressLike)}>
                        <FavoriteIcon onClick={() => setPressLike(!pressLike)}
                                      className={!pressLike ? s.heart_icon_press : s.heart_icon}

                        />
                        {likes}


                    </div>


                </div>
                <div className={s.card_title}>{title}</div>
                <div className={s.item_category}>
                    <a>{category}</a>
                </div>
            </div>


        </div>

    )
}
