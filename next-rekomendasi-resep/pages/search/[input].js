import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import SearchPage from '../../components/SearchPage';

const search = (props) => {
    return (
        <React.Fragment>
            <Head>
                <link rel="stylesheet" href="/css/materialize.min.css" />
                <script src="/js/materialize.min.js"/>
                <title>Rekom - {props.input}</title>
            </Head>
            <SearchPage input={props.input} listResep={props.listResep} from={''} to={''} />
        </React.Fragment>
    )

}

search.getInitialProps = async (context) => {
    try {
        const { input } = context.query;
        let res = await axios.get(`http://localhost:8000/search/${input}`);
        return {input: input, listResep: res.data};
    } catch(err){
        console.log(err)
    }
}

export default search;