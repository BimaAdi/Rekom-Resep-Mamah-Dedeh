import React, { Component } from 'react';

class ResepDetail extends Component {
    render() {
        const { title_resep, image_url, bahan_resep, penyajian_resep } = this.props.resep;
        return (
            <div className="card">
                <div className="card-image">
                    <img src={image_url} style={{height: '400px'}} />
                </div>
                <div className="card-content">
                    <span className="card-title"><h3>{title_resep}</h3></span>
                    <h5>Bahan</h5>
                    <p>{bahan_resep}</p>
                    <h5>Cara Membuat</h5>
                    <p>{penyajian_resep}</p>
                </div>
            </div>
        );
    }
}
 
export default ResepDetail;