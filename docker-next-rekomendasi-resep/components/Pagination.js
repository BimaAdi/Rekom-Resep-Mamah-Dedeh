import React, { Component } from 'react';
import Link from 'next/link';

class Pagination extends Component {

    formatPagination = () => {
        let { currentPage, listLength, input} = this.props;
        let numPage = Math.round(listLength / 10);

        let template = [];
        for (let i = 1; i <= numPage; i++) {
            if (i === currentPage) {
                template.push(
                    <Link href={`/search/${input}?page=${i}`}>
                        <li className="active"><a>{i}</a></li>
                    </Link>
                )
            } else {
                template.push(
                    <Link href={`/search/${input}?page=${i}`}>
                        <li className="waves-effect"><a>{i}</a></li>
                    </Link>
                )
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