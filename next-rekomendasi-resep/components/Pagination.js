import React, { Component } from 'react';

class Pagination extends Component {

    formatPagination = () => {
        let { currentPage, listLength, changePagination} = this.props;
        let numPage = Math.round(listLength / 10);

        let template = [];
        for (let i = 1; i <= numPage; i++) {
            if (i === currentPage) {
                template.push(<li className="active" onClick={() => changePagination(i)}><a>{i}</a></li>)
            } else {
                template.push(<li className="waves-effect" onClick={() => changePagination(i)}><a>{i}</a></li>)
            }
        }

        return template;
    }

    render() { 
        return (
            <ul className="pagination center-align">
                {this.formatPagination()}
            </ul>
        );
    }
}
 
export default Pagination;