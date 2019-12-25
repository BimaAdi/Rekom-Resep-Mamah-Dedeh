import React, { Component } from 'react';
import Link from 'next/link';

class SearchBox extends Component {
    render() { 
        let { input } = this.props;
        if (input === undefined) {
            input = ''; // error handling
        }
        return (
            <div className="card white">
                <div className="card-content">
                    <h1 className="center-align">Dapur Rekom Resep Mamah Dedeh</h1>
                </div>
                <div className="card-action">
                    <div className="input-field">
                        <input type="text" className="validate" value={input} onChange={(e) => this.props.inputOnChange(e.target.value)}/>
                        <label htmlFor="email">Masukan bahan yang anda miliki</label>
                    </div>
                    <Link href={`/search/${input.split(" ").join(",")}`}>
                        <a className="waves-effect waves-light btn">Cari Resep</a>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default SearchBox;