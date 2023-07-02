import React, {useEffect, useState} from "react";
import firstWeek from "../../assets/first-week.png"
import secondWeek from "../../assets/second-week.png"
import thirdWeek from "../../assets/third-week.png"
import forthWeek from "../../assets/forth-week.png"
import "../../assets/css/HomeRight.css"


const HomeRight = () => {


    useEffect(() => {

        document.querySelector('.btn1').addEventListener('click', () => setActive(1))
        document.querySelector('.btn2').addEventListener('click', () => setActive(2))
        document.querySelector('.btn3').addEventListener('click', () => setActive(3))
        document.querySelector('.btn4').addEventListener('click', () => setActive(4))
        let active = [1, 1];
        let last = new Date().getTime();

        function setActive(i) {
            last = new Date().getTime();
            active = [active[1], i];
            for (let x = 1; x <= 4; x++){
                if (document.querySelector('.btn' + x).classList.contains('active-btn')){
                    document.querySelector('.btn' + x).classList.remove('active-btn');
                }
            }
            document.querySelector('.btn' + active[1]).classList.add('active-btn');
            attemptChange();
        }

        function attemptChange() {
            if (active[0] !== active[1]) {
                console.log('changing');
                const curr = document.querySelector('.week' + active[0]);
                curr.style.opacity = 0;
                curr.style.transform = "translateY(var(--shift))";
                setTimeout(() => {
                    const nxt = document.querySelector('.week' + active[1]);
                    nxt.style.opacity = 1;
                    nxt.style.transform = "translateY(0)";
                }, 200);
            }
        }

        setInterval(() => {
            if (document.querySelector('.btn1') === null) {
                return;
            }
            let time = new Date().getTime();
            if (time - last > 3000) {
                setActive(active[1] % 4 + 1);
            }
        }, 1000);

    }, [])


    return (
        <div className={"home-right"}>
            <div className={"img-container"}>
                <img src={firstWeek} alt="" className={"week1 active-week"}/>
                <img src={secondWeek} alt="" className={"week2"}/>
                <img src={thirdWeek} alt="" className={"week3"}/>
                <img src={forthWeek} alt="" className={"week4"}/>
            </div>

            <div className={"week-changer"}>
                <button className={"active-btn btn1"}>1
                </button>
                <button className={"btn2"}>2
                </button>
                <button className={"btn3"}>3
                </button>
                <button className={"btn4"}>4
                </button>
            </div>

        </div>
    )
}

export default HomeRight;
