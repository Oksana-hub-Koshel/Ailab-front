import s from "../Portfolio.module.scss";
import "../portfolio.scss";
import {Link} from "react-router-dom";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai";
import {useState} from "react";

export const PortfolioBlocks = ({currentWork, likeButtonHandler, like}) => {

    const likes = like.map(elem => {
        return <p>{elem}</p>
    })

    const [pressLike, setPressLike] = useState(false);
    return (
        <>

            {currentWork.map(item => {
                console.log(item)
                return (
                    <>
                        <div className={s.card_with_body} key={item.id}>
                            <Link to={`/info/${item.id}`} state={{from: `${item.id}`}} className={s.card}
                                  key={item.id}>
                                <div style={{backgroundImage: `url( ${item.image})`}}
                                     className={s.image}></div>
                            </Link>

                            <div className={s.card_body}>
                                <div className={s.portfolio_meta}>
                                    <div className={s.author}>
                                        <AiOutlineUser/>
                                        Ai Lab
                                    </div>

                                    <div className={s.likes} onClick={() => likeButtonHandler(item.id)}>
                                        <AiOutlineHeart
                                            className={`${pressLike === true ? `heart_icon_press` : `heart_icon`}`}/>
                                        {item.like}

                                    </div>


                                </div>
                                <div className={s.card_title}>{item.title}</div>
                                <div className={s.item_category}>
                                    <a>{item.tags.title}</a>
                                </div>
                            </div>


                        </div>

                    </>


                )
            })}

        </>


    )
}