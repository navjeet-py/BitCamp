import React, {useEffect} from "react";
import HomeLeft from "../../Components/HomeLeft/HomeLeft";
import "./Home.css"
import HomeRight from "../../Components/HomeRight/HomeRight";
import HomeBottom from "../../Components/HomeBottom/HomeBottom";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/Navbar";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Home • BitCamp'

    }, []);
    return (

        <div className={"home"}>
            <NavBar active={"home"}/>

            <div className={"row-1"}>
                <div className={"left-container"}>
                    <HomeLeft/>
                </div>
                <div className={"right-container"}>
                    <HomeRight/>
                </div>
            </div>

            <div className={"row-2"}>
                <HomeBottom/>
            </div>

            <div className={"row-3"}>
                <FAQ/>
            </div>

            <Footer/>
        </div>
    )
}

export default Home;