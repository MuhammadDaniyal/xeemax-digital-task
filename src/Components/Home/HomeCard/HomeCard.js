import React from 'react'
import "./HomeCard.css"
import Card from './Card'

const HomeCard = () => {
    return (
        <>
            <div className="container card-container">
                <div className="row row-container">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

        </>
    )
}

export default HomeCard