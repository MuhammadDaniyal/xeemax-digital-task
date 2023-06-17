import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div className="main">

                <div className="intro">
                    <h1>We help you grow <br />
                        your <span>conversions.</span></h1>
                    <p>Featured in leading publications around the world</p>
                    <div>
                        <img style={{ width: "10rem", height: "3rem" }} src="./images/pic2.jpeg" alt="pic1" />
                        <img style={{ width: "10rem", height: "4.2rem" }} src="./images/pic1.jpeg" alt="pic2" />
                    </div>
                    <NavLink to='/'>
                        <button className='my-btn'>Contact Us</button>
                    </NavLink>
                </div>
                <div className="myimg">
                    <img src="./images/main.jpeg" alt="main" />
                </div>

            </div>
        </>
    )
}

export default Main;