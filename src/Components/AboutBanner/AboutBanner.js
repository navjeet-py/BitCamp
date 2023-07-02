import React from "react";
import aboutBannerPic from "../../assets/about-banner.svg"
import "../../assets/css/AboutBanner.css"


const AboutBanner = () => {
    return (
        <div className={'about-banner'}>
            <div className={"banner-container"}>
                <div className={'banner-text'}>
                    <h2 className={'banner-heading'}><span>Who</span> Are We?</h2>
                    <p className={'banner-para'}>
                        We are a team of highly dedicated IITians, who want to foster a coding culture among school
                        students. After joining college, we noticed that students with some coding experience during
                        their school days gained a big advantage over others. Our primary objective is to empower you
                        with that advantage.
                    </p>
                </div>
                <div className={'banner-img-container'}>
                    <img className={'banner-img'} src={aboutBannerPic} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner;