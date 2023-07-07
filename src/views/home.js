import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Paradigm Strategist</title>
        <meta property="og:title" content="Direct Paradigm Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
