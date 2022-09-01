import React from 'react';

const Header = () => {

    return (
        <header className="mainHeader">
            <section className="container">
                <div className="primaryInfo">
                    <span class="primaryLogo">
                        <a href='https://www.activeandfitdirect.com/' className="logo">
                            <img src={require("../Assets/active-and-fit-LOGO.JPG")}/>
                        </a>
                    </span>
                </div>
                <div id="ashHeaderButtons" className="ashHeaderButtons">
                    <div id="ember5-proxy">
                        <a href="#" className="button bare login">LOG IN</a>
                    </div>
                    <div id="ember100-proxy">
                        <a href='#' className="button primary">AM I ELIGIBLE</a>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;