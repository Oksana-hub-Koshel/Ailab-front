import s from "./Portfolio.module.scss";
import "./portfolio.scss";
import {Link} from "react-router-dom";
import {Pagination} from "./Pagination";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {PortfolioBlocks} from "./Portfolio_blocks/PortfolioBlocks";
import {PortfolioBlocksApp} from "./Portfolio_blocks/PortfolioBlocksApp";


export const Portfolio = () => {
    const [active, setActive] = useState("all");
    const [app, setApp] = useState([]);
    const [works, setWorks] = useState([]);
    const [like, setLike] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [counterPage] = useState(6);


    const likeButtonHandler = useCallback(
        (id, pressLike) => {
            if (pressLike) {
                axios({
                    method: 'GET',
                    url: `http://127.0.0.1:8000/api/portfolio/like/${id}/add_like/`,
                }).then(response => {
                    console.log(response)
                    if (response) {

                        setWorks(
                            works.map((item) => item.id === id ? {
                                    ...item,
                                    likes: item.likes + 1,
                                } : item
                            )
                        )
                        setApp(
                            app.map((elem) => elem.id === id ? {...elem, likes: elem.likes + 1,} : elem,
                            ))
                    } else alert("Error")

                });
            } else if (!pressLike) {
                axios({
                    method: 'GET',
                    url: `http://127.0.0.1:8000/api/portfolio/dislike/${id}/remove_like/`,
                }).then(response => {
                    if (response) {
                        setWorks(
                            works.map((item) => item.id === id ? {
                                    ...item,
                                    likes: item.likes - 1,
                                } : item
                            )
                        )
                        setApp(
                            app.map((elem) => elem.id === id ? {...elem, likes: elem.likes - 1,} : elem,
                            ))
                    } else alert("Error")


                })
            }


        },
        [works, app]
    );


    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/portfolio/portfolio/').then(response => {
            setWorks(response.data);

        });
        axios.get('http://127.0.0.1:8000/api/portfolio/portfolio-app/').then(response => {
            setApp(response.data);
        })

    }, [])


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
                <div className={s.item} onClick={() => setActive("all")}>
                    <a className={`${active === 'all' ? 'active_button_all' : 'no_active_app'}`}>все
                        <sup>1</sup>
                    </a>

                </div>

                <div className={s.item} onClick={() => setActive('app')}>
                    <a className={`${active === 'app' ? 'active_button_app' : 'no_active_all'} `}>app
                        <sup>1</sup></a>

                </div>
            </div>

            <div className={s.wrapp_works}>
                <>

                    {active === "all" ?
                        <>
                            {currentWork.map(item => {
                                return (
                                    <PortfolioBlocks currentWork={currentWork} likeButtonHandler={likeButtonHandler}
                                                     likes={item.likes}
                                                     id={item.id} image={item.image} title={item.title}
                                                     category={item.tags.title}/>

                                )
                            })}
                        </> :
                        <>

                            {app.map(elem => {
                                return (
                                    <PortfolioBlocksApp app={app} likeButtonHandler={likeButtonHandler} id={elem.id}
                                                        image={elem.image} likes={elem.likes} title={elem.title}
                                                        category={elem.tags.title}/>
                                )
                            })
                            }
                        </>
                    }


                </>
            </div>


            <Pagination counterPage={counterPage} totalWorks={works.length} pagination={pagination}/>

        </div>
    )
}
