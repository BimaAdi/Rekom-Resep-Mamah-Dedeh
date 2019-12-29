import React from 'react'
import Head from 'next/head'
import axios from 'axios';
import ResepPage from '../../components/ResepPage'

const resep = (props) => {

  return (
  <div>
      <Head>
      <meta name="description" content={props.resep.title_resep} />
      <meta name="keywords" content={`${props.resep.title_resep}, resep, bahan, makanan`} />
      <link rel="stylesheet" href="/css/materialize.min.css" />
      <script src="/js/materialize.min.js"/>
      <title>Rekom - {props.resep.title_resep}</title>
      </Head>

      <ResepPage resep={props.resep} rekomendasi={props.rekomendasi}/>
  </div>)
}

resep.getInitialProps = async (context) => {
  try {
      const { pid } = context.query;
      let resResep = await axios.get(`http://api:8000/resep/${pid}`);
      let resRekomendasi = await axios.get(`http://api:8000/rekomendasi/${pid}`);
      return {resep: resResep.data[0], rekomendasi: resRekomendasi.data};
  } catch(err){
      // TODO buat page 404 not found http://localhost:3000/resep/Resep%20Gulai%20Ayam
      console.log("ERRR-------------");
      console.log(err)
      return {error: 'error'}
  }
}

export default resep