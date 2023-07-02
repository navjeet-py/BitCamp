import Question from "../Question/Question";
import "../../assets/css/FAQ.css"
import {useEffect} from "react";

const FAQ = () => {

     useEffect(() => {
        const questions = document.querySelectorAll('.question');
        const row = document.querySelector(".faq");
        let displayed = false;

        window.addEventListener("scroll", () => {
            if (!displayed)
            if (row.getBoundingClientRect().y < window.innerHeight - 200) {
                displayed = true;
                for (let i = 0; i < questions.length; i++) {
                    setTimeout(() => {
                        console.log('hehe')
                        questions[i].style.opacity = 1;
                        questions[i].style.transform = 'translateY(0)';
                    }, 200 * (i + 1));
                }
            }
        })
    }, [])


    return (
        <div className={"faq"}>
            <h1>Frequently Asked Questions</h1>
            <p className={"tagline"}></p>
            <div className={"questions"} >
                <Question number={1}/>
                <Question number={2}/>
                <Question number={3}/>
                <Question number={4}/>
            </div>
        </div>
    )
}

export default FAQ;