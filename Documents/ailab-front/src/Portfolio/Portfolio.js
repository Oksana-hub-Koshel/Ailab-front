import s from "./Portfolio.module.scss";
import "./portfolio.scss";
import {Link} from "react-router-dom";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai";
import {Pagination} from "./Pagination";
import {useEffect, useState} from "react";
import axios from "axios";


export const Portfolio = () => {
    const [active, setActive] = useState("All");
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [counterPage] = useState(6);


    useEffect(() => {
        const getWorks = async () => {
            setLoading(true);
            const res = await axios.get('http://127.0.0.1:8000/api/portfolio/portfolio/')
            setWorks(res.data);

            setLoading(false)
        }
        getWorks();

    }, [])
    console.log(works)

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
                        <Link to={`/info/${item.id}`} state={{from: `${item.id}`}} className={s.card} c>
                            <div style={{backgroundImage: `url( ${item.image})`}} className={s.image}></div>
                            <div className={s.card_body}>
                                <div className={s.portfolio_meta}>
                                    <div className={s.author}>
                                        <AiOutlineUser/>
                                        Ai Lab
                                    </div>
                                    <div className={s.likes}>
                                        <AiOutlineHeart className={s.heart_icon}/>
                                        {item.like}
                                    </div>
                                </div>
                                <div className={s.card_title}>{item.title}</div>
                                <div className={s.item_category}>
                                    <a>{item.tags}</a>
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
