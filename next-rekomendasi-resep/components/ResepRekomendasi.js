import React, { Component } from 'react';
import Link from 'next/link';

class ResepRekomendasi extends Component {
    state = {  }
    render() { 
        const { rekomendasi } = this.props;
        return (
            <div className="card">
                <div style={grid}>
                    {rekomendasi.map((item) => {
                        return (
                            <Rekomendasi key={item} item={item}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

class Rekomendasi extends Component {
    render() { 
        const { title_resep, image_url} = this.props.item;
        return (
        <Link href={`/resep/${title_resep}`}>
            <div className="card" >
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={image_url} style={{height:'150px'}} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title_resep}</span>
                </div>
            </div>
        </Link>);
    }
}

const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1em',
    padding: '1em'
}
 
export default ResepRekomendasi;