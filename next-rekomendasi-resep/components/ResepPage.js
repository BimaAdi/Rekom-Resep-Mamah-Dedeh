import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import ResepDetail from './ResepDetail';
import ResepRekomendasi from './ResepRekomendasi';

class ResepPage extends Component {

    render() {
        const { resep, rekomendasi } = this.props;
        return (
            <React.Fragment>
                <Nav />
                <div className="container">
                    <ResepDetail resep={resep}/>
                    <h5>Rekomendasi</h5>
                    <ResepRekomendasi rekomendasi={rekomendasi}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ResepPage;