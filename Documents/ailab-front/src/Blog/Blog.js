import s from "./Blog.module.scss";
import {Link} from "react-router-dom";
import {BiMessage} from "react-icons/bi";
import {BsClockHistory} from "react-icons/bs"


export const Blog = () => {
    const data = [

        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland",
            photo: "https://i.pinimg.com/236x/38/b2/0b/38b20b8f7cf99741a83df9dc7727f51b.jpg",
            category: "app",
            description: "Amazing development soft-web-development, new technologies, achivments",
            section1: "web",
            section2: "space",
            date: "22.04.2022",
            author: "Jack Pele",
            comment: 10,
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "London",
            photo: "https://i.pinimg.com/236x/38/b2/0b/38b20b8f7cf99741a83df9dc7727f51b.jpg",
            category: "app",
            description: "Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivmentsAmazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments",
            section1: "web",
            section2: "space",
            date: "22.04.2022",
            author: "Jack Pele",
            comment: 10,
            likes: 10
        },
        {
            // image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "San Francisco",
            photo: "https://i.pinimg.com/236x/38/b2/0b/38b20b8f7cf99741a83df9dc7727f51b.jpg",
            category: "app",
            description: "Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivmentsAmazing development soft-web-development, new technologies, achivments",
            section1: "web",
            section2: "space",
            date: "22.04.2022",
            author: "Jack Pele",
            comment: 10,
            likes: 4
        },
        {
            image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=pexels-pixabay-33688.jpg&fm=jpg&_gl=1*9jrolq*_ga*ODczNzc5NDg3LjE2NjY2MDI5NDc.*_ga_8JE65Q40S6*MTY2NjYwMjk1MS4xLjEuMTY2NjYwNDAzMi4wLjAuMA.",
            caption: "Amsterdam",
            photo: "https://i.pinimg.com/236x/38/b2/0b/38b20b8f7cf99741a83df9dc7727f51b.jpg",
            category: "app",
            description: "Amazing development soft-web-development, new technologies, achivments",
            section1: "web",
            section2: "space",
            date: "22.04.2022",
            author: "Jack Pele",
            comment: 10,
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv",
            category: "app",
            photo: "https://i.pinimg.com/236x/38/b2/0b/38b20b8f7cf99741a83df9dc7727f51b.jpg",
            description: "Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments",
            section1: "web",
            section2: "space",
            date: "22.04.2022",
            author: "Jack Pele",
            comment: 10,
            likes: 510
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv",
            category: "app",
            photo: "https://i.pinimg.com/236x/38/b2/0b/38b20b8f7cf99741a83df9dc7727f51b.jpg",
            description: "Amazing development soft-web-development, new technologies, achivments Amazing development soft-web-development, new technologies, achivments",
            section1: "web",
            section2: "space",
            date: "22.04.2022",
            author: "Jack Pele",
            comment: 10,
            likes: 5
        }
    ]
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

                {data.map(item => {
                    return (
                        <>
                            <div className={s.item1}>
                                <div className={s.card}>
                                    <a className={s.image_block}>
                                        <img src={item.image}/>
                                    </a>
                                    <div className={s.card_body}>
                                        <h5 className={s.card_title}>
                                            <a>{item.caption}</a>
                                        </h5>
                                        <p className={s.descrip}>{item.description}</p>
                                        <div className={s.tag_links}>
                                            <a className={s.tag_link}>{item.section1}</a>
                                            <a className={s.tag_link}>{item.section2}</a>
                                        </div>

                                    </div>
                                    <div className={s.card_footer}>
                                        <a className={s.left_side}>
                                            <img className={s.author_foto} src={item.photo}/>
                                            <div className={s.author_name}>{item.author}</div>
                                        </a>
                                        <div className={s.post_meta}>
                                            <a>
                                                <BiMessage/>
                                                {item.comment}
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


                {/*<div className={s.item2}>*/}
                {/*    <div className={s.card}>*/}
                {/*        <a className={s.image_block}>*/}
                {/*            <img src={data[1].image}/>*/}
                {/*        </a>*/}
                {/*        <div className={s.card_body}>*/}
                {/*            <h5 className={s.card_title}>*/}
                {/*                <a>{data[1].caption}</a>*/}
                {/*            </h5>*/}
                {/*            <p className={s.descrip}>{data[1].description}</p>*/}
                {/*            <div className={s.tag_links}>*/}
                {/*                <a className={s.tag_link}>{data[1].section1}</a>*/}
                {/*                <a className={s.tag_link}>{data[1].section2}</a>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*        <div className={s.card_footer}>*/}
                {/*            <a className={s.left_side}>*/}
                {/*                <img className={s.author_foto} src={data[1].photo}/>*/}
                {/*                <div className={s.author_name}>{data[1].author}</div>*/}
                {/*            </a>*/}
                {/*            <div className={s.post_meta}>*/}
                {/*                <a>*/}
                {/*                    <BiMessage/>*/}
                {/*                    {data[1].comment}*/}
                {/*                </a>*/}
                {/*                <span>*/}
                {/*                    <BsClockHistory/>*/}
                {/*                    {data[1].date}*/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}
