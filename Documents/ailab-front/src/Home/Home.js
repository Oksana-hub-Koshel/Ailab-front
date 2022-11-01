import {Development} from "./Development/Development";
import {Stages} from "./Stages/Stages";
import {Order} from "./Order/Order";
import Works from "./Works/Works";


export const Home = () => {
    return (
        <>
            <Order/>
            <Development/>
            <Stages/>
            <Works/>

        </>

    )
}
