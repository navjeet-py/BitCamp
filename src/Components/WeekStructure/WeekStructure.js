import React, {useState} from "react";
import "../../assets/css/WeekStructure.css"
import WeekTopic from "../WeekTopic/WeekTopic";

const WeekStructure = (props) => {

    const [expanded, setExpanded] = useState(props.number === 1 || props.number === 2);


    const structures = {
        1: [
            {
                title: "Python Basics",
                lectures: 2,
                desc: "We'll start off with Python. Python is a great first language," +
                    " because of its simple and readable syntax and vast ecosystem of libraries. " +
                    "We will also solve some CP problems using Python to get a hang of it."
            },
            {
                title: "Python Advanced",
                lectures: 2,
                desc: "We'll dive deeper into concepts of Python like OOP, File Handling and " +
                    "we will use some libraries to perform some cool tasks."
            },
            {
                title: "HTML - CSS",
                lectures: 2,
                desc: "Learning HTML and CSS is the first step towards being a web developer. " +
                    "We'll learn basics of webdev. We'll also create some basic webpages"
            }
        ],
        2: [
            {
                title: "JavaScript",
                lectures: 2,
                desc: "We'll move on to the next step of web development and use javascript to " +
                    "make our previously made web pages dynamic. Knowing Some Python will make this very very easy."
            },
            {
                title: "Django",
                lectures: 2,
                desc: "Now, we will learn Django (backend framework of Python) to add backend to our websites. We'll learn how to " +
                    "use databases to make our site more functional and useful. We'll also learn how to build a REST API."
            },
            {
                title: "React.js",
                lectures: 2,
                desc: "We'll advance our web dev knowledge by learning React.js. " +
                    "It makes our front-end development really smooth and easy. Later on we'll use React.js in frontend and Django in backend " +
                    "to build a fully-functional image sharing site. "
            }
        ],
        3: [
            {
                title: "Django Rest Framework",
                lectures: 1,
                desc: "To build REST APIs using Django, we will learn Django Rest Framework. It provides easy serialization," +
                    " authentication, and request handling. We will also learn about CSRF Tokens."
            },
            {
                title: "Picster",
                lectures: 3,
                desc: "We'll develop an image sharing site. We'll build an REST API using Django Rest Framework and frontend on react. " +
                    "The website will have features like login, signup, upload picture, see others pictures and profiles. " +
                    "Later on we'll also add face recognition login system when we will learn machine learning."
            },
            {
                title: "Numpy and Pandas",
                lectures: 2,
                desc: "NumPy and Pandas are essential Python libraries for data manipulation and analysis. " +
                    "NumPy provides efficient array operations, while Pandas offers high-performance data structures " +
                    "and data analysis tools."
            }
        ],
        4: [
            {
                title: "Matplotlib",
                lectures: 1,
                desc: "Matplotlib is a popular Python library for creating visualizations and plots, providing a wide " +
                    "range of tools for producing static, animated, and interactive graphs and charts."


            },
            {
                title: "Machine Learning",
                lectures: 3,
                desc: "We'll learn how to build machine learning models using a data. We'll learn basic math behind those models " +
                    "and we'll use Scikit-Learn to implement them. We will also clean and perform some data-analysis before it into models."
            },
            {
                title: "Face Recognition",
                lectures: 1,
                desc: "We'll use a Python Library to build a face recognition system. Then we'll implement that to authenticate users on our" +
                    " previously made web-app Picster."
            },
            {
                title: "Outro",
                lectures: 1,
                desc: "We'll summarise what we learned in this camp and will help you with resources to proceed in any field of your choice." +
                    " You'll given certificates for attending this camp. We might also take some tests."
            }
        ]
    }

    const structure = structures[props.number];

    return (
        <div className={expanded ? "week-structure expanded-week" : "week-structure"}>
            <div className={"week-number"} onClick={() => setExpanded(!expanded)}>
                <p className={"week"}>Week {props.number}</p>
                <button>{">"}</button>
            </div>
            {expanded ? (
                <div className={"topics"}>
                    {structure.map((topic, idx) => {
                        return (
                            <div key={idx}>
                                <WeekTopic topic={topic} expand={(props.number === 1)  && (idx === 0 || idx === 1)}/>
                            </div>
                        )
                    })}
                </div>
            ) : ("")}


        </div>
    )
}

export default WeekStructure;