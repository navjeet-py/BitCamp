import React, {useEffect} from "react";
import NavBar from "../../Components/Navbar/Navbar";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import "./About.css"
import AboutCard from "../../Components/AboutCard/AboutCard";
import Footer from "../../Components/Footer/Footer";


const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'About Us • BitCamp'

    }, []);


    return (
        <div>
            <NavBar active={"about"}/>

            <AboutBanner/>

            <div className={"about-main"}>
                <div className={"wrapper"}>

                    <h1>Our Team</h1>
                    <div className={"cards-container"}>

                        <AboutCard user={'chetan'}/>
                        <AboutCard user={'abhijeet'}/>
                        <AboutCard user={'sahil'}/>
                        <AboutCard user={'gulia'}/>
                        <AboutCard user={'navjeet'}/>
                        <AboutCard user={'chhapri'}/>


                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default About;