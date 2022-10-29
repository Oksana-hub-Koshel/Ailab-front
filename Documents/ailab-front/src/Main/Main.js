import {Home} from "../Home/Home";
import {Header} from "../Header/Header";
import {Portfolio} from "../Portfolio/Portfolio";
import {Cases} from "../Cases/Cases";
import {Blog} from "../Blog/Blog";
import {Footer} from "../Footer/Footer";
import {Route, Routes} from "react-router-dom";

export const Main = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/cases" element={<Cases/>}/>
                <Route path="/blog" element={<Blog/>}/>

            </Routes>
            <Footer/>
        </>

    )

}