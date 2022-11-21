import s from "./Works.module.scss"
import {FaArrowRight} from "react-icons/fa";
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {WorksBlocks} from "./WorksBlocks/WorksBlocks";


function Works() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/portfolio/portfolio-index/').then(response => {
            setCard(response.data);

        });

    }, [])


    const likeButtonHandler = useCallback(
        (id, pressLike) => {
            if (pressLike) {
                axios({
                    method: 'GET',
                    url: `http://127.0.0.1:8000/api/portfolio/like/${id}/add_like/`,
                }).then(response => {
                    if (response) {

                        setCard(
                            card.map((item) => item.id === id ? {
                                    ...item,
                                    likes: item.likes + 1,
                                } : item
                            )
                        )
                    } else alert("Error")

                });
            } else if (!pressLike) {
                axios({
                    method: 'GET',
                    url: `http://127.0.0.1:8000/api/portfolio/dislike/${id}/remove_like/`,
                }).then(response => {
                    if (response) {
                        setCard(
                            card.map((item) => item.id === id ? {
                                    ...item,
                                    likes: item.likes - 1,
                                } : item
                            )
                        )

                    } else alert("Error")


                })
            }


        },
        [card]
    );


    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //     }
    // }, [])


    return (
        <div className={s.container}>
            <div className={s.title}>
                <h2>Портфолио</h2>
                <p>Последние выполненные работы для нашего портфолио</p>
            </div>

            <div className={s.blocks}>
                {card.map(item => {
                    return (
                        <WorksBlocks id={item.id} image={item.image} title={item.title} category={item.tags.title}
                                     likes={item.likes} likeButtonHandler={likeButtonHandler}/>
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