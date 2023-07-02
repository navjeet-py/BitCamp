import React from "react";
import "../../assets/css/StructureBanner.css"
import aboutBannerPic from "../../assets/structure.svg";

const StructureBanner = () => {
    return (
        <div className={"structure-banner"}>
            <div className={"banner-container"}>
                <div className={'banner-text'}>
                    <h2 className={'banner-heading'}> Course <span>Structure</span></h2>
                    <p className={'banner-para'}>
                        We have designed a very optimal camp structure which will give you a boost start in your
                        programming journey. You'll get a start in various programming areas, and then you can decide
                        which ones you want to master. We'll also guide you for your journey ahead. We'll also build numerous projects to teach you how to structure
                        a project. <br/>You'll also be issued a certificate at the camp's end.

                    </p>
                </div>
                <div className={'banner-img-container'}>
                    <img className={'banner-img'} src={aboutBannerPic} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default StructureBanner;