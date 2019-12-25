import React, { Component } from 'react';
import Link from 'next/link';

class SearchList extends Component {
    render() { 
        const { listResep } = this.props;
        return (
            <React.Fragment>
                {listResep.map((item) => {
                    return (
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={item.image_url} style={{width:'300px', height:'200px'}} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>{item.title_resep}</p>
                                </div>
                                <div className="card-action">
                                    <Link href="/resep/[pid]" as={`/resep/${item.title_resep}`} style={{cursor: 'pointer'}}>
                                        <a>Lihat Resep</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}
 
export default SearchList;