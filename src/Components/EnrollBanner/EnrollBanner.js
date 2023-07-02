import React from "react";
import "../../assets/css/EnrollBanner.css"
import aboutBannerPic from "../../assets/enroll.svg";
import Icon from "../Icon/Icon";

const EnrollBanner = () => {


    function openWhatsapp() {
        window.open("https://wa.me/+916200075051", "_blank")
    }

    return (
        <div className={"enroll-banner"}>
            <div className={"banner-container"}>
                <div className={'banner-text'}>

                    <h2 className={'banner-heading'}><span>Join</span> this amazing <br
                        className={"heading-break-1"}/> summer camp, <br className={"heading-break-2"}/> at
                        just <span>₹1500</span></h2>

                    <p className={'banner-para'}>
                        <strong>Duration: </strong> 26th June to 22nd July
                        <br/>
                        <strong>Timings: </strong> 4PM - 8PM
                        <br/>
                        <strong>Address: </strong>3rd floor, Hari Om Tower
                        <br/>
                        <strong>Call Us: </strong>+91 8112283543

                    </p>
                    <button className={"whatsapp-btn"} onClick={openWhatsapp}><Icon type={"whatsapp"}/>WhatsApp Us
                    </button>
                </div>
                <div className={'banner-img-container'}>
                    <img className={'banner-img'} src={aboutBannerPic} alt={""}/>
                </div>
            </div>


        </div>
    )
}

export default EnrollBanner;