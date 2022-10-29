import s from "./Development.module.scss";

export const Development = () => {
    const data = [

        {
            image: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Scotland"
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "London"
        },
        {
            image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "San Francisco"
        },
        {
            image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=pexels-pixabay-33688.jpg&fm=jpg&_gl=1*9jrolq*_ga*ODczNzc5NDg3LjE2NjY2MDI5NDc.*_ga_8JE65Q40S6*MTY2NjYwMjk1MS4xLjEuMTY2NjYwNDAzMi4wLjAuMA.",
            caption: "Amsterdam"
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv"
        },
        {
            image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Kyiv"
        }
    ]
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h2>Разрабатываем цифровые стратегии, продукты,<br/> услуги другие бизнес решения</h2>
                <div className={s.blocks}>
                    {data.map(item => {
                        return (
                            <a className={s.block}>
                                <img src={item.image}/>
                                <p>{item.caption}</p>
                            </a>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}