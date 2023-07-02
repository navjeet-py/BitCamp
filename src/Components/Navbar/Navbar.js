import React from "react";
import "../../assets/css/Navbar.css"
import {Link} from "react-router-dom";
import {Navbar} from "@nextui-org/react";
import Logo from "../Logo/Logo";


const NavBar = (props) => {

    const collapseItems = [
        "Home",
        "Structure",
        "About Us",
        "Enroll",
    ];

    const link = {
        "Home": "home",
        "Structure": "course-structure",
        "About Us": "about",
        "Enroll": "enroll"
    }


    const active = props.active;
    let bgcolor;
    if (active === 'home') bgcolor = 'white';
    else bgcolor = "var(--lightest-blue)";


    return (
        <div className={active === 'home' ? "uncolored navbar-container" : "colored navbar-container"}>
            <Navbar variant="static" css={{
                $$navbarBackgroundColor: bgcolor,
                $$navbarBlurBackgroundColor: bgcolor
            }}>
                <Navbar.Toggle showIn="xs"/>
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Link className={"nav-logo-link"} to={"/home"}><Logo/></Link>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Link className={active === 'home' ? "active-tab navbar-link" : "navbar-link"}
                          to="/home">Home</Link>
                    <Link className={active === 'structure' ? "active-tab navbar-link" : "navbar-link"}
                          to="/course-structure">Structure</Link>
                    <Link className={active === 'about' ? "active-tab navbar-link" : "navbar-link"} to="/about">About
                        Us</Link>

                    <Link to={"/enroll"}>
                        <button className={"enroll-button"}>Enroll</button>
                    </Link>
                </Navbar.Content>

                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={item}
                            css={{
                                color: index === collapseItems.length - 1 ? "$error" : "",

                            }}
                            isActive={item === active}
                        >
                            <Link className={"collapsed-navlink"}
                                  to={"/" + link[item]}
                                  color="inherit"
                                  css={{
                                      minWidth: "100%",
                                  }}
                                  href="#" onClick={() => {
                                let x = document.querySelector('nav button');
                                x.click();
                            }}
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;