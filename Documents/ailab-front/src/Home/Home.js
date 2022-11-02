import {Stages} from "./Stages/Stages";
import {Order} from "./Order/Order";
import Works from "./Works/Works";
import {Development} from "./Development/Development";


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
