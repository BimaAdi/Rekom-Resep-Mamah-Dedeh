import React, { Component } from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox';
import SearchList from './SearchList';

class SearchPage extends Component {
    state = {
        input: this.props.input,
        listResep: this.props.listResep
    }

    inputOnChange = (text) => {
        this.setState({
            input: text,
            listResep: this.state.listResep
        });
    }

    render() { 
        const { input, listResep } = this.state;
        return (
        <React.Fragment>
            <Nav />
            <div className="container">
                <SearchBox input={input} inputOnChange={this.inputOnChange} />
                {
                    listResep.length !== 0 ? <SearchList listResep={listResep} /> : ''
                }
            </div>
        </React.Fragment>
        );
    }
}
 
export default SearchPage;
