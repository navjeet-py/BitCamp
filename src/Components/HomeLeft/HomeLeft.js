import React from "react";
import "../../assets/css/HomeLeft.css"
import Icon from "../Icon/Icon";
import {Link} from "react-router-dom";

const HomeLeft = () => {

    // useEffect(() => {
    //     const arrowIcon = document.querySelector('svg');
    //     let transform = 40;
    //     setInterval(() => {
    //         if (transform === 0) {
    //             transform = 40;
    //             arrowIcon.style.transform = "translateX(40px)";
    //         } else {
    //             transform = 0;
    //             arrowIcon.style.transform = "translateX(0)";
    //         }
    //     }, 200)
    //
    // }, [])

    return (
        <div className={"home-left"}>
            <h1>Best <span className={"arrow-icon"}><Icon type={"arrow"}/></span></h1>
            <h1>Summer</h1>
            <h1>to learn</h1>
            <h1 className={"coding"}>coding.</h1>
            <p className={"tagline tagline1"}>Month long coding camp at your city <strong>Ranchi</strong></p>
            <p className={"tagline tagline2"}>Make your summer productive.</p>
            <div className={"enroll-btn-container"}>
                <Link to={"/enroll"}>

                    <button className={"enroll-btn"}>
                        Enroll Now
                    </button>
                </Link>
                <Link to={"/course-structure"}>

                    <button className={"structure-btn"}>
                        Course Structure
                    </button>
                </Link>

            </div>

            <div className={"instructors"}>
                <Link to={"/about"}>Know about our instructors <Icon type={"arrow"}/></Link>
                {/*<p className={"instructors-tagline"}>All our instructors are from different IITs</p>*/}
                {/*<p>IIT Bombay, Delhi and Roorkee</p>*/}
            </div>
        </div>
    )
}


export default HomeLeft;