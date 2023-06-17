import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div className="col-10 col-lg-3 col-md-3 mx-auto">
                <div className='card-home'>
                    <img className='card-home-img' src="./images/profile_pic.jpg" alt="profile" />
                    <div className='card-heading'>
                        <h3>Tim Haldorsson</h3>
                        <p>Paid Search Manager</p>
                    </div>
                    <div className='card-home-link'>
                        <p>Gothenburg, Sweden <br />
                            tim@lunarstrategy.com</p>
                    </div>
                    <NavLink style={{ width: "100%" }} to='/'>
                        <button className='my-card-btn'>Contact Us</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Card