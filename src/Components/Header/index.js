import React from 'react';
import Nav from './Nav';

function Header(props){
    const {pageSelected, setPageSelected} = props;

    return(
        <header>
            <Nav
            pageSelected={pageSelected}
            setPageSelected={setPageSelected}
            />
        </header>
    );
}

export default Header;