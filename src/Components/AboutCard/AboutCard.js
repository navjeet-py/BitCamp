import React from "react";
import "../../assets/css/AboutCard.css"
import navjeetPic from "../../assets/navjeet.png"
import sahilPic from "../../assets/sahil.jpeg"
import chetanPic from "../../assets/chetan.jpg"
import guliaPic from "../../assets/gulia.jpg"
import chhapriPic from "../../assets/chhapri.jpeg"
import abhijeetPic from "../../assets/abhijeet.jpeg"

const AboutCard = (props) => {


    const usersDetails = {
        navjeet: {
            name: "NAVJEET BHARTI",
            position: "Biotech • IIT Roorkee",
            img: navjeetPic,
            desc: "Hi, I'm Navjeet Bharti, a first year undergraduate student at IIT Roorkee. I've been an enthusiast of programming my whole life. I am interested in web dev, competitive programming and machine learning.",
            email: "navjeetbharti8877@gmail.com"
        },
        sahil: {
            name: "RISHIKESH SAHIL",
            position: "CSE • IIT Kanpur",
            img: sahilPic,
            desc: "Hi, I'm Rishikesh Sahil, a CSE undergrad at IIT Kanpur. I will help you get started in this programming adventure. As a small city boy myself, I want to help you fulfill your dream of becoming software engineer.",
            email: "rishikeshsahil168@gmail.com"
        },
        chetan: {
            name: "Chetan Arya",
            position: "EE • IIT Delhi",
            img: chetanPic,
            desc: "Hello, I'm Chetan Arya, a second year undergrad at IIT Delhi. On second's thought, I play piano and endulge myself in creative writing. I am a physics enthusiast and really enjoy solving physics problems. Hope to meet you soon!",
            email: "chetan26arya@gmail.com"
        },
        gulia: {
            name: "Kartik Gulia",
            position: "CSE • IIT Delhi",
            img: guliaPic,
            desc: "Hi! I am Kartik Gulia, studying as an undergraduate in IIT Delhi. I like reading books, watching movies, and cycling. I also write and sketch sometimes, with dire consequences. I also code, ofcourse.",
            email: "kartikgulia742@gmail.com"
        },
        chhapri: {
            name: "Shubham Kumar",
            position: "ECM • IIT Delhi",
            img: chhapriPic,
            desc: "Hello! I am Shubham, a sophomore at IIT Delhi. I am a competitive programmer and web developer. I am also a data science and app development enthusiast. Mathematics and creative pursuits are what keep me in the grid.",
            email: "donvito1729@gmail.com"
        },
        abhijeet: {
            name: "Abhijeet Anand",
            position: "CSE • IIT Bombay",
            img: abhijeetPic,
            desc: "Hola, soy Abhijeet Anand, cursando mi B.Tech de IIT Bombay. Soy un entusiasta de la programación competitiva y el aprendizaje automático. Me encantaría enseñar y aprender de todos ustedes en el campamento.",
            email: "abhijeet15348@gmail.com"
        }
    }


    const user = usersDetails[props.user];

    return (
        <div className={"about-card"}>
            <div className={"about-card-container"}>
                <p className={"name"}>{user.name}</p>
                <p className={"position"}>{user.position}</p>
                <hr/>
                <img src={user.img} alt="" className={"img"}/>
                <hr className={"below-picture-line"}/>
                <p className={"desc"}>{user.desc}</p>
                <p className={"email"}><strong>@</strong> {"  " + user.email}</p>
            </div>
        </div>
    )
}

export default AboutCard;