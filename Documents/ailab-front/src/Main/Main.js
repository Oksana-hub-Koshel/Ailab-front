import {Home} from "../Home/Home";
import {Header} from "../Header/Header";
import {Portfolio} from "../Portfolio/Portfolio";
import {Cases} from "../Cases/Cases";
import {Blog} from "../Blog/Blog";
import {Route, Routes} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {Info} from "../Portfolio/Info/Info";
import {NoPage} from "../NoPage/NoPage";
import {PortfolioBlocksApp} from "../Portfolio/Portfolio_blocks/PortfolioBlocksApp";

export const Main = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/cases" element={<Cases/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/app" element={<PortfolioBlocksApp/>}/>
                <Route path="*" element={<NoPage/>}/>
                <Route path="/info/:id" element={<Info/>}/>

            </Routes>
            <Footer/>
        </>

    )

}