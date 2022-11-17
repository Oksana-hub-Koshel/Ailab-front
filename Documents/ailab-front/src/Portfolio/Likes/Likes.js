import s from "../Portfolio.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useState} from "react";

export const Likes = ({likeButtonHandler, id, likes}) => {
    const [pressLike, setPressLike] = useState(false);
    return (
        <div className={s.likes} onClick={() => likeButtonHandler(id)}>
            <FavoriteIcon onClick={() => setPressLike(!pressLike)}
                          className={!pressLike ? s.heart_icon_press : s.heart_icon}/>
            {likes}

        </div>
    )
}