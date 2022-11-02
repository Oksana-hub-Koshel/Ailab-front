import s from "./Works.module.scss"
import {FaRegHeart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Pagination} from "@mui/material";


function Works() {
    const [photos, setPhotos] = useState([

            {
                image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Scotland",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Scotland",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Scotland",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Scotland",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "London",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "San Francisco",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=pexels-pixabay-33688.jpg&fm=jpg&_gl=1*9jrolq*_ga*ODczNzc5NDg3LjE2NjY2MDI5NDc.*_ga_8JE65Q40S6*MTY2NjYwMjk1MS4xLjEuMTY2NjYwNDAzMi4wLjAuMA.",
                caption: "Amsterdam",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Kyiv",
                author: "Willy Billy"
            },
            {
                image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                caption: "Kyiv",
                author: "Willy Billy"
            }
        ]
    );

    const scrollHandler = (e) => {
        console.log('scroll')
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
                {photos.map(item => {
                    return (

                        <div className={s.block} key={item.id}>
                            <a href="/portfolio"> <img src={item.image}/></a>
                            <div className={s.description}>
                                <p>{item.author}</p>
                                <h3>{item.caption}</h3>
                            </div>
                            <div className={s.card_footer}>
                                <div className={s.app}>
                                    <a href="/">
                                        Mobile Apps
                                    </a>
                                </div>
                                <div className={s.likes}>
                                    <FaRegHeart className={s.icon_heart}/>
                                    <p>12</p>

                                </div>

                            </div>


                        </div>

                    )


                })}

            </div>
            <div className={s.btn_wrapp}>
                <Pagination count={3} color="secondary" className={s.pagin}/>

                {/*<a>посмотреть все работы</a>*/}
                {/*<i className={s.circle}>*/}
                {/*    <FaArrowRight className={s.arrow_icon}/>*/}
                {/*</i>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}

export default Works;