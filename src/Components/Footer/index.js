import React from 'react';

function Footer(){
    return(
        <footer>
            <div className="logo">
                <a href="https://github.com/coevpen" target="_blank" rel="noreferrer">
                    <img alt="GitHub" src={require("../../assets/github_logo.png")}></img>
                </a>
            </div>

            <div className="logo">
                <a href="https://www.linkedin.com/in/courtney-evins-dev/" target="_blank" rel="noreferrer">
                    <img alt="linkedIn" src={require("../../assets/linkedin_logo.png")}></img>
                </a>
            </div>
        </footer>
    );

}

export default Footer;