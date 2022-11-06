import s from "./Works.module.scss"
import {FaArrowRight, FaRegHeart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


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
                {/*<Pagination count={3} color="secondary" className={s.pagin}/>*/}
                <Link to="/portfolio">посмотреть все работы</Link>
                <i className={s.circle}>
                    <FaArrowRight/>
                </i>


            </div>
        </div>
    )
}

export default Works;