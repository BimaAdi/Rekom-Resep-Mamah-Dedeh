import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import SearchPage from '../../components/SearchPage';

const search = (props) => {
    return (
        <React.Fragment>
            <Head>
                <meta name="description" content={`Makanan yang menggunakan bahan ${props.input}`} />
                <meta name="keywords" content={`${props.input},Makanan`} />
                <link rel="stylesheet" href="/css/materialize.min.css" />
                <script src="/js/materialize.min.js"/>
                <title>Rekom - {props.input}</title>
            </Head>
            <SearchPage input={props.input} listResep={props.listResep} page={props.page}/>
        </React.Fragment>
    )

}

search.getInitialProps = async (context) => {
    try {
        const { input, page } = context.query;
        let res = await axios.get(`http://localhost:8000/search/${input}`);
        return {input: input, listResep: res.data, page: parseInt(page, 10)};
    } catch(err){
        console.log(err)
    }
}

export default search;