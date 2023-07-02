import React from "react";
import "../../assets/css/TopicBox.css"
import Icon from "../Icon/Icon";

const TopicBox = (props) => {


    const topics = {
        python: {
            title: "Python",
            desc: "Python is a great first language because it has a beginner-friendly syntax and a wide range of applications",
            days: 4,
            hours: 12,
            iconType: 'python'
        },
        html: {
            title: "HTML",
            desc: "HTML stands for Hyper Text Markup Language and it is the basic building block of any web application.",
            days: 1,
            hours: 3,
            iconType: 'html'
        },
        css: {
            title: "CSS",
            desc: "CSS (Cascading Style Sheets) is a language used to define the visual appearance and layout of web pages.",
            days: 1,
            hours: 3,
            iconType: 'css'
        },
        js: {
            title: "JavaScript",
            desc: "JavaScript is primarily used for web development to create interactive and dynamic website functionalities.",
            days: 2,
            hours: 6,
            iconType: 'js'
        },
        react: {
            title: "React.js",
            desc: "React.js is a JavaScript library for building single-page applications, focusing on components reusability.",
            days: 2,
            hours: 6,
            iconType: 'react'
        },
        django: {
            title: "Django",
            desc: "Django is a Python web framework that simplifies and accelerates web development by providing built-in features.",
            days: 2,
            hours: 6,
            iconType: 'django'
        },
        numpy: {
            title: "Numpy",
            desc: "NumPy is a Python library for providing efficient array operations and mathematical functions for scientific tasks.",
            days: 1,
            hours: 3,
            iconType: "numpy"
        },
        ml: {
            title: "Machine Learning",
            desc: "ML enables computers to learn from and make predictions based on data patterns, without being explicitly programmed.",
            days: 4,
            hours: 12,
            iconType: "ml"
        },
        sklearn: {
            title: "Scikit-Learn",
            desc: "Scikit-learn is a Python library for ML that provides algorithms and tools for classification, regression, clustering.",
            days: 2,
            hours: 6,
            iconType: "sklearn"
        }


    }


    const topic = topics[props.name];
    const bgColor = "var(--" + props.bg + ")"

    return (
        <div className={"topic-box"} style={{
            backgroundColor: bgColor
        }}>

            <Icon type={topic.iconType}/>
            <p className={"title"}>{topic.title}</p>
            <p className={"desc"}>{topic.desc}</p>
            <div className={"time"}>
                <span>{topic.days} days</span>
                <div className={"vertical-line"}></div>
                <span>{topic.hours} hours</span>
            </div>

        </div>
    )
}

export default TopicBox;