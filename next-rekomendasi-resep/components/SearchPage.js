import React, { Component } from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox';
import SearchList from './SearchList';
import Pagination from './Pagination';

class SearchPage extends Component {
    state = {
        input: this.props.input.split(",").join(" "),
        listResep: this.props.listResep,
        currentPage: 1
    }

    inputOnChange = (text) => {
        this.setState({
            input: text,
            listResep: this.state.listResep,
            currentPage: this.state.currentPage
        });
    }

    changePagination = (n) => {
        window.scroll(0, 0);
        this.setState({
            input: this.state.input,
            listResep: this.state.listResep,
            currentPage: n
        })
    }

    limitData = (page) => {
        let start = (page - 1) * 10;
        let end = start + 9;

        let data = [];
        for (let i = start; i <= end; i++) {
            data.push(this.state.listResep[i]);
        }

        return data;
    }

    render() { 
        const { input, listResep, currentPage } = this.state;
        return (
        <React.Fragment>
            <Nav />
            <div className="container">
                <SearchBox input={input} inputOnChange={this.inputOnChange} />
                {
                    listResep.length !== 0 ? <SearchList listResep={this.limitData(currentPage)} /> : ''
                }
                {
                    listResep.length !== 0 ? <Pagination currentPage={currentPage} listLength={listResep.length} changePagination={this.changePagination} /> : ''
                }
            </div>
        </React.Fragment>
        );
    }
}
 
export default SearchPage;
