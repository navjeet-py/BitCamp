import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Structure from "./Pages/Structure/Structure";
import About from "./Pages/About/About";
import Enroll from "./Pages/Enroll/Enroll";
import React from "react";

function App() {
    return (
        <div className="App">
            {/*<NavBar active={"home"}/>*/}
            {/*<hr style={{*/}
            {/*    width: "80%",*/}
            {/*    margin: "0 auto",*/}
            {/*    opacity: 0.3*/}
            {/*}}/>*/}

            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="course-structure" element={<Structure/>}/>
                <Route path="enroll" element={<Enroll/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
