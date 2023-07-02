import React, {useEffect} from "react";
import "../../assets/css/HomeBottom.css"
import Icon from "../Icon/Icon";
import TopicBox from "../TopicBox/TopicBox";
import {Link} from "react-router-dom";

const HomeBottom = () => {

    const topics = [
        "python", "html",
        "css", "js", "react",
        "django", "numpy", "ml", "sklearn",
    ]


    useEffect(() => {
        const topicBoxes = document.querySelectorAll('.topic-box');
        const row2 = document.querySelector(".row-2");
        let displayed = false;

        window.addEventListener("scroll", () => {
            if (!displayed)
            if (row2.getBoundingClientRect().y < 200) {
                displayed = true;
                for (let i = 0; i < topicBoxes.length; i++) {
                    setTimeout(() => {
                        console.log('hehe')
                        topicBoxes[i].style.opacity = 1;
                        topicBoxes[i].style.transform = 'translateY(0)';
                    }, 200 * (i + 1));
                }
            }
        })
    }, [])


    let remWidth = window.outerWidth / parseInt(getComputedStyle(document.querySelector("body")).fontSize);
    let el;
    if (remWidth >= 70) {
        el = (
            <div className={"topics"}>
                <div className={"topics-row topics-row-1"}>
                    <TopicBox name={topics[0]} bg={"light-blue"}/>
                    <TopicBox name={topics[1]} bg={"lightest-blue"}/>
                </div>
                <div className={"topics-row"}>
                    <TopicBox name={topics[2]} bg={"light-blue"}/>
                    <TopicBox name={topics[3]} bg={"lightest-blue"}/>
                    <TopicBox name={topics[4]} bg={"light-blue"}/>
                </div>
                <div className={"topics-row topics-row-3"}>
                    <TopicBox name={topics[5]} bg={"light-blue"}/>
                    <TopicBox name={topics[6]} bg={"lightest-blue"}/>
                    <TopicBox name={topics[7]} bg={"light-blue"}/>
                    <TopicBox name={topics[8]} bg={"lightest-blue"}/>
                </div>
            </div>
        )
    } else {
        el = (
            <div className={"topics"}>
                <div className={"topics-row topics-row-1"}>
                    <TopicBox name={topics[0]} bg={"light-blue"}/>
                    <TopicBox name={topics[1]} bg={"lightest-blue"}/>
                </div>
                <div className={"topics-row"}>
                    <TopicBox name={topics[2]} bg={"lightest-blue"}/>
                    <TopicBox name={topics[3]} bg={"light-blue"}/>
                </div>
                <div className={"topics-row topics-row-3"}>
                    <TopicBox name={topics[4]} bg={"light-blue"}/>
                    <TopicBox name={topics[5]} bg={"lightest-blue"}/>
                </div>
                <div className={"topics-row"}>
                    <TopicBox name={topics[6]} bg={"lightest-blue"}/>
                    <TopicBox name={topics[7]} bg={"light-blue"}/>
                </div>

            </div>
        )
    }

    return (
        <div className={"home-bottom"}>
            <div className={"wrapper"}>
                <div className={"details"}>
                    <h1>What will</h1>
                    <h1>you learn</h1>
                    <h1>in this camp</h1>
                    <p className={"tagline1"}>We will also build numerous projects during this camp.</p>
                    <p>We will build projects involving multiple frameworks at a time.</p>
                    <Link to={"/course-structure"}>
                        <button>Detailed Structure <Icon type={"arrow"}/></button>
                    </Link>
                </div>
                <div></div>
                {el}

            </div>
        </div>
    )
}
export default HomeBottom;