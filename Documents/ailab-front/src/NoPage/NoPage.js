import s from "./NoPage.module.scss";
import {Link} from "react-router-dom";

export const NoPage = () => {
    return (
        <div className={s.container}>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <p>Вернуться <Link to="/">на главную</Link></p>
        </div>
    )
}
