import s from "./Portfolio.module.scss";
import "./portfolio.scss";
import {Link} from "react-router-dom";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai";
import {Pagination} from "./Pagination";
import {useState} from "react";


export const Portfolio = () => {
    const [active, setActive] = useState("All");
    const [works, setWorks] = useState([

        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "London",
            category: "app",
            likes: 10
        },
        {
            image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "San Francisco",
            category: "app",
            likes: 4
        },
        {
            image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=pexels-pixabay-33688.jpg&fm=jpg&_gl=1*9jrolq*_ga*ODczNzc5NDg3LjE2NjY2MDI5NDc.*_ga_8JE65Q40S6*MTY2NjYwMjk1MS4xLjEuMTY2NjYwNDAzMi4wLjAuMA.",
            caption: "Amsterdam",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv",
            category: "app",
            likes: 510
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland",
            category: "app",
            likes: 5
        },
        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland",
            category: "app",
            likes: 5
        },

    ]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [counterPage] = useState(6);

    // useEffect(() => {
    //     const getWorks = async () => {
    //         setLoading(true);
    //         const res = await axios.get('http://vhjjkkk')
    //         setWorks(res.data);
    //         setLoading(false)
    //     }
    //     getWorks();
    //
    // }, [])

    const lastPageIndex = currentPage * counterPage;
    const firstPageIndex = lastPageIndex - counterPage;
    const currentWork = works.slice(firstPageIndex, lastPageIndex);

    const pagination = pageNumber => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className={s.container}>
            <div className={s.title}>
                <div className={s.title_center}>
                    <div>
                        <div className={s.breadcrump}>
                            <div><Link to="/">Главная</Link></div>
                            <div>/</div>
                            <div><Link to="/portfolio">Портфолио</Link></div>
                        </div>
                    </div>
                    <h1>наши работы</h1>
                </div>
            </div>

            <div className={s.list}>
                <div className={s.item}>

                    <a onClick={() => setActive('All')}
                       className={` active_button_all ${active === 'All' ? 'active_button_all' : 'no_active_app'}`}>все
                        <sup>1</sup>
                    </a>

                </div>

                <div className={s.item}>

                    <a onClick={() => setActive('App')}
                       className={`${active === 'App' ? 'active_button_app' : 'no_active_all'} `}>app
                        <sup>1</sup></a>

                </div>
            </div>

            <div className={s.wrapp_works}>
                {currentWork.map(item => {
                    return (
                        <Link to="/info" className={s.card}>
                            <img src={item.image}/>
                            <div className={s.card_body}>
                                <div className={s.portfolio_meta}>
                                    <div className={s.author}>
                                        <AiOutlineUser/>
                                        Ai Lab
                                    </div>
                                    <div className={s.likes}>
                                        <AiOutlineHeart className={s.heart_icon}/>
                                        {item.likes}
                                    </div>
                                </div>
                                <div className={s.card_title}>{item.caption}</div>
                                <div className={s.item_category}>
                                    <a>{item.category}</a>
                                </div>
                            </div>


                        </Link>
                    )
                })}

            </div>
            <Pagination counterPage={counterPage} totalWorks={works.length} pagination={pagination}/>

        </div>
    )
}
