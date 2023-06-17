import React from 'react'
import Layout from '../../Layout'
import { NavLink } from 'react-router-dom'
import Main from './Main/Main'
import HomeCard from './HomeCard/HomeCard'

const Home = () => {
    return (
        <>
            <Layout>
                <Main />
                <HomeCard />
            </Layout>
        </>
    )
}

export default Home