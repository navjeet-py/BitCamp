import React from "react";
import "../../assets/css/Footer.css"
import {Link} from "react-router-dom";
import logoWhite from "../../assets/logo-white.png"

const Footer = () => {
    return (
        <div className={"footer"}>
            <Link to={"/"}><img src={logoWhite} alt="" height={35}/></Link>
            <h1>Let's code out<br/> this summer</h1>
            <div className={"footer-links"}>
                <Link to={"/home"}>Home</Link>
                <Link to={"/course-structure"}>Structure</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/enroll"}>Enroll</Link>
            </div>
            <p className={"legal"}>All rights reserved <br/> BitCamp © Copyright 2023</p>
</div>
)
}

export default Footer;
