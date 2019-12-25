import React from 'react'
import Head from 'next/head'
import SearchPage from '../components/SearchPage'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/css/materialize.min.css" />
        <script src="/js/materialize.min.js"/>
        <title>Rekom Mamah Dedeh</title>
      </Head>
      <SearchPage input={''} listResep={[]}/>
    </React.Fragment>
  )
} 


export default Home
