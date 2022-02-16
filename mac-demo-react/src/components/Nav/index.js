import React from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    return (
        <nav>
            <ul>
                {pages.map((Page) => (
                    <li>
                        <span>Page</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
