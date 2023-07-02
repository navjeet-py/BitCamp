import React, {useEffect} from "react";
import NavBar from "../../Components/Navbar/Navbar";
import StructureBanner from "../../Components/StructureBanner/StructureBanner";
import "./Structure.css"
import WeekStructure from "../../Components/WeekStructure/WeekStructure";
import Footer from "../../Components/Footer/Footer";

const Structure = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Course Structure • BitCamp'
    }, []);
    return (
        <div>
            <NavBar active={"structure"}/>

            <StructureBanner/>

            <h1 className={"structure-heading"}>Camp Structure</h1>

            <WeekStructure number={1}/>
            <WeekStructure number={2}/>
            <WeekStructure number={3}/>
            <WeekStructure number={4}/>

            <Footer/>
        </div>
    )
}

export default Structure;