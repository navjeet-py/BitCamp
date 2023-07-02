import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import EnrollBanner from "../../Components/EnrollBanner/EnrollBanner";
import EnrollForm from "../../Components/EnrollForm/EnrollForm";
import Footer from "../../Components/Footer/Footer";
import {useEffect} from "react";

const Enroll = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Enroll • BitCamp'

    }, []);
    return (
        <div>
            <NavBar active={""}/>

            <EnrollBanner/>

            <EnrollForm/>

            <Footer/>
        </div>
    )
}

export default Enroll;