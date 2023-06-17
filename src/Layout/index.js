import React from 'react'
import Header from '../Components/Navbar/Header'

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default index