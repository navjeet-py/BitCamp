import React, {useState} from "react";
import "../../assets/css/Question.css"

const Question = (props) => {



    const questions = {
        0: {
            question: "Why should we attend this camp?",
            answer: ""
        },
        1: {
            question: "What is the duration and timing of the camp?",
            answer: "The camp will be 4 weeks long, starting from 26th June (Monday)." +
                " Sundays will be off. Every class day, the classes will be from 4PM to 7PM. " +
                "Moreover,  we will be there for you till 8PM. " +
                "In that period, you can ask some personal doubts."
        },
        2: {
            question: "Do we need to bring a laptop for the camp.",
            answer: "Since this is a complete hand-on practical camp, " +
                "bringing a laptop will definitely help. Otherwise, inform us " +
                "about this issue before, we'll try our best to arrange a laptop for you."
        },
        3: {
            question: "Will I get any notes to revise later?",
            answer: "Yes, you will receive a Github repository containing notes and codes related" +
                " to everything discussed in the class."
        },
        4: {
            question: "Am I eligible for this camp?",
            answer: "Anyone studying in class 8th or above, even with zero knowledge of programming is " +
                "welcome in this camp. We'll be starting everything from basics. However, any pre-knowledge of programming" +
                " will make things easier for you."
        }
    }

    const [expanded, setExpanded] = useState(props.number === 1);

    const question = questions[props.number];

    return (
        <div className={expanded ? "question expanded-question" : "question"} onClick={() => setExpanded(!expanded)}>

            <div className={"question-container"}>
                <p className={"question-text"}>{question.question}</p>
                <button className={expanded ? "inverted-btn" : ""}>
                    >
                </button>
            </div>
            {expanded ? (<p className={"answer"}>{question.answer}</p>) : (<span></span>)}


        </div>
    )
}

export default Question;