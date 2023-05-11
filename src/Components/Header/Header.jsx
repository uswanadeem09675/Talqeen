import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    // let move = useNavigate()
    // const [isLoggedIn, setisLoggedIn] = useState(null);
    // const logIn = () => {
    //     move('/login')
    //     setisLoggedIn(true);
    // };
    // const logOut = (event) => {
    //     event.preventDefault();
    //     let token = localStorage.removeItem('token', "");
    //     let role = localStorage.removeItem('role', "")
    //     console.log(token, role);
    //     move('/')
    //     setisLoggedIn(false);
    // };


    return (
        <React.Fragment>
            <div className="top_container sub_pages">
                {/*  header section strats  */}
                <header className="header_section">
                    <div className="container">
                        <Navbar className="custom_nav-container" expand="lg">
                            <Container>
                                <Link className="navbar-brand" to="/">
                                    <img src={logo} alt="logo" />
                                    <span>
                                        Adward
                                    </span>
                                </Link>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <div className="d-flex ms-auto flex-column flex-lg-row align-items-center">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/"> Home <span className="sr-only">(current)</span></Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className="nav-link" to="/about"> About </Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className="nav-link" to="/video"> Video </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Categories"> Categories </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                            </li>
                                            {/* {
                                                isLoggedIn ? (
                                                    <li className="nav-item" onClick={logOut}>
                                                        <Link className="nav-link" to="/contact">Logout</Link>
                                                    </li>
                                                ) : (
                                                    <li className="nav-item" onClick={logIn}>
                                                        <Link className="nav-link" to="/contact">Login</Link>
                                                    </li>
                                                )
                                            } */}
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                        </form>
                                    </div>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </header>
                {/* <Home /> */}

            </div>
            {/* <!-- end header section --> */}

        </React.Fragment>
    )
}

export default Header