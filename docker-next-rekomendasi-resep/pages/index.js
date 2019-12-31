import React from 'react'
import Head from 'next/head'
import SearchPage from '../components/SearchPage'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content='Website pencarian resep berdasarkan bahan' />
        <meta name="keywords" content='pencarian, resep, bahan, makanan' />
        <link rel="stylesheet" href="/css/materialize.min.css" />
        <script src="/js/materialize.min.js"/>
        <title>Rekom Mamah Dedeh</title>
      </Head>
      <SearchPage input={''} listResep={[]} page={0}/>
    </React.Fragment>
  )
} 


export default Home
