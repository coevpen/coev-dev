import React from 'react';


function Nav(props){
    const{
        pageSelected,
        setPageSelected
    } = props;

    return(
        <nav>
            <span className="nav-link" onClick={() => setPageSelected("Start")}>Home</span>
            <span className="nav-link" onClick={() => setPageSelected("About")}>About Me</span>
            <span className="nav-link" onClick={() => setPageSelected("Portfolio")}>Projects</span>
            <span className="nav-link" onClick={() => setPageSelected("Resume")}>Resume</span>
            <span className="nav-link" onClick={() => setPageSelected("Contact")}>Contact Me</span>
        </nav>
    );
}

export default Nav;