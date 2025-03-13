import HomePageHandler from "../../keyPressHandlers/HomePageHandler"
import useNavigationHandler from "../../hooks/useNavigationHandler"
import Selectable from "../../components/Selectable";
import TestCard from "../../components/TestCard";


function HomePage() {
    useNavigationHandler(HomePageHandler)

    return (
        <main>
           <Selectable id={'button'} initial><TestCard/></Selectable>
        </main>
    )
}

export default HomePage;
